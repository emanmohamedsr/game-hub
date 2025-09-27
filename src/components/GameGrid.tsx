import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Center, SimpleGrid } from "@chakra-ui/react";

const GameGrid = () => {
	const { error, isLoading, games } = useGames();
	if (error) return <div>Error: {error.message}</div>;
	if (isLoading) return <div>Loading...</div>;
	if (games && games.length === 0) return <div>No games found</div>;
	return (
		<Center>
			<SimpleGrid
				gap={{ base: 2, md: 3, lg: 4 }}
				columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
				p={2}>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</Center>
	);
};

export default GameGrid;
