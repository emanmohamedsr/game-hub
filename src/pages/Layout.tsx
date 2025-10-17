import NavBar from "@/components/layout/NavBar";
import SiderBar from "@/components/layout/SiderBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<Grid
			templateAreas={{
				base: `"aside nav" "main main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<GridItem area={"aside"} p={{ base: 2, sm: 3 }}>
				<SiderBar />
			</GridItem>
			<GridItem area={"main"} px={6}>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default RootLayout;
