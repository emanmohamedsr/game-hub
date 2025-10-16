import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import GenresList from "./components/GenresList";
import Main from "./components/Main";

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
			<GridItem area={"nav"}>
				<NavBar />
			</GridItem>
			<GridItem display={{ base: "none", lg: "block" }} area={"aside"} pl={2}>
				<GenresList />
			</GridItem>
			<GridItem area={"main"} px={6}>
				<Main />
			</GridItem>
		</Grid>
	);
};

export default App;
