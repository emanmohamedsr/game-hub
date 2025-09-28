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
			}}
			templateColumns={{ base: "1fr", lg: "auto 1fr" }}>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<GridItem display={{ base: "none", lg: "block" }} area={"aside"} pl={2}>
				<GenresList />
			</GridItem>
			<GridItem area={"main"} pr={6}>
				<GamesList />
			</GridItem>
		</Grid>
	);
};

export default App;
