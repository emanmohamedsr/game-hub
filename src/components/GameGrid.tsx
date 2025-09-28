import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Center, SimpleGrid } from "@chakra-ui/react";
import GameGridSkeleton from "./GameGridSkeleton";
import EmptyGamesState from "./EmptyGamesState";

const GameGrid = () => {
	const { error, isLoading, games } = useGames();
	if (error) return <div>Error: {error.message}</div>;
	if (isLoading) return <GameGridSkeleton />;
	if (!games || (games && games.length === 0)) return <EmptyGamesState />;
	return (
		<Center>
			<SimpleGrid
				gap={{ base: 4, md: 6 }}
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
