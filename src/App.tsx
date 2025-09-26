import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";

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
				bg={"green.700"}
				display={{ base: "none", lg: "block" }}
				area={"aside"}>
				Aside
			</GridItem>
			<GridItem bg={"blue.700"} area={"main"}>
				Main
			</GridItem>
		</Grid>
	);
};

export default App;
