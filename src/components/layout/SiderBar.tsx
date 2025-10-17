import {
	Box,
	CloseButton,
	Drawer,
	IconButton,
	Portal,
	VStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import GenresList from "../GenresList";

interface IPCProps {
	children: ReactNode;
}
const PCSider = ({ children }: IPCProps) => {
	return (
		<VStack w={"100%"} p={4} alignItems='flex-start' gap={4}>
			{children}
		</VStack>
	);
};

interface IMobileSiderDrawerProps {
	children: ReactNode;
}
const MobileSiderDrawer = ({ children }: IMobileSiderDrawerProps) => {
	return (
		<Drawer.Root placement={"start"}>
			<Drawer.Trigger asChild>
				<IconButton
					size={{ base: "sm", sm: "xl" }}
					aria-label='open genre list'
					colorPalette={"gray"}
					variant='ghost'>
					<GiHamburgerMenu />
				</IconButton>
			</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Genres List</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>{children}</Drawer.Body>
						<Drawer.CloseTrigger asChild>
							<CloseButton size='sm' />
						</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
};
const SiderBar = () => {
	return (
		<>
			<Box display={{ base: "none", lg: "block" }}>
				<PCSider>
					<GenresList />
				</PCSider>
			</Box>
			<Box display={{ base: "block", lg: "none" }}>
				<MobileSiderDrawer>
					<GenresList />
				</MobileSiderDrawer>
			</Box>
		</>
	);
};

export default SiderBar;
