import NavBar from "@/components/layout/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<NavBar />
			<Box p={5}>
				<Outlet />
			</Box>
		</>
	);
};

export default RootLayout;
