import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/layout/NavBar";
import GenresList from "./components/GenresList";
import { useState } from "react";
import type { IGameQuery } from "./interfaces";
import Main from "./components/Main";

const App = () => {
	const [gameQuery, setGameQuery] = useState<IGameQuery>();

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
			<GridItem area={"nav"}>
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, search: searchText })
					}
					setSelectedGenreId={(genreId) =>
						setGameQuery({ ...gameQuery, genreId })
					}
					selectedGenreId={gameQuery?.genreId}
				/>
			</GridItem>
			<GridItem display={{ base: "none", lg: "block" }} area={"aside"} pl={2}>
				<GenresList
					setSelectedGenreId={(genreId) =>
						setGameQuery({ ...gameQuery, genreId })
					}
					selectedGenreId={gameQuery?.genreId}
				/>
			</GridItem>
			<GridItem area={"main"} px={6}>
				<Main setGameQuery={setGameQuery} gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default App;
