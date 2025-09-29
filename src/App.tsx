import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { IGenre } from "./interfaces";
import Main from "./components/Main";

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null);
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
			<GridItem area={"nav"}>
				<NavBar
					setSelectedGenre={setSelectedGenre}
					selectedGenre={selectedGenre}
				/>
			</GridItem>
			<GridItem display={{ base: "none", lg: "block" }} area={"aside"} pl={2}>
				<GenresList
					setSelectedGenre={setSelectedGenre}
					selectedGenre={selectedGenre}
				/>
			</GridItem>
			<GridItem area={"main"} px={6}>
				<Main selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	);
};

export default App;
