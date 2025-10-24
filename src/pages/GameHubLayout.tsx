import SiderBar from "@/components/layout/SiderBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const GameHubLayout = () => {
	return (
		<Grid
			templateAreas={{
				base: `"aside aside" "main main"`,
				lg: `"aside main" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
			<GridItem area={"aside"}>
				<SiderBar />
			</GridItem>
			<GridItem area={"main"} px={6}>
				<Outlet />
			</GridItem>
		</Grid>
	);
};

export default GameHubLayout;
