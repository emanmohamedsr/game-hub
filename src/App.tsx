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
					setSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					selectedGenre={gameQuery?.genre || null}
				/>
			</GridItem>
			<GridItem display={{ base: "none", lg: "block" }} area={"aside"} pl={2}>
				<GenresList
					setSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
					selectedGenre={gameQuery?.genre || null}
				/>
			</GridItem>
			<GridItem area={"main"} px={6}>
				<Main
					gameQuery={gameQuery}
					onSelectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
					onSelectSort={(sort) => setGameQuery({ ...gameQuery, sort })}
				/>
			</GridItem>
		</Grid>
	);
};

export default App;
