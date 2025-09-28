import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import GamesList from "./components/GamesList";
import GenresList from "./components/GenresList";

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
			<GridItem display={{ base: "none", lg: "block" }} area={"aside"}>
				<GenresList />
			</GridItem>
			<GridItem area={"main"}>
				<GamesList />
			</GridItem>
		</Grid>
	);
};

export default App;
