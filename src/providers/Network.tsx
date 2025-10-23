import { toaster } from "@/config/toaster.config";
import { useColorMode } from "@/hooks/useColorMode";
import useNetworkStore from "@/store/network";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState, type ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

const TOASTER_ID = "network-toaster";

const NetworkProvider = ({ children }: IProps) => {
	const { colorMode } = useColorMode();
	const [showOverlay, setShowOverlay] = useState(false);
	const { isOnline, setOnline, setOffline } = useNetworkStore();

	useEffect(() => {
		const handleOnline = () => queueMicrotask(setOnline);
		const handleOffline = () => queueMicrotask(setOffline);

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, [setOnline, setOffline]);

	useEffect(() => {
		if (!isOnline) {
			queueMicrotask(() => {
				if (!toaster.isVisible(TOASTER_ID)) {
					toaster.loading({
						id: TOASTER_ID,
						title: "No network",
						description: "You're offline. Some features may be unavailable.",
					});
				}
			});
		} else {
			queueMicrotask(() => {
				if (toaster.isVisible(TOASTER_ID)) {
					toaster.update(TOASTER_ID, {
						title: "Reconnected",
						description: "Network connection restored.",
						type: "success",
						duration: 3000,
					});
				}
			});
		}
	}, [isOnline]);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (!isOnline) {
				e.preventDefault();
				e.stopPropagation();
				setShowOverlay(true);
			} else setShowOverlay(false);
		};
		document.addEventListener("click", handleClick, true);
		return () => document.removeEventListener("click", handleClick, true);
	}, [isOnline]);

	return (
		<>
			{!isOnline && showOverlay && (
				<Box
					display='fixed'
					top='0'
					left='0'
					width='100%'
					bgGradient={
						colorMode === "light"
							? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
							: "linear-gradient(to right, #97266d, #6b46c1)"
					}
					zIndex='9999'>
					<Text py={2} px={4}>
						You are offline. Please check your network connection.
					</Text>
				</Box>
			)}
			{children}
		</>
	);
};

export default NetworkProvider;
