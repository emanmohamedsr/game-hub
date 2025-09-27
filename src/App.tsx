import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<GridItem
				bg={"primary.300"}
				display={{ base: "none", lg: "block" }}
				area={"aside"}>
				Aside
			</GridItem>
			<GridItem bg={"primary.100"} area={"main"}>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default App;
