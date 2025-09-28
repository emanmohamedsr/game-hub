import GameCard from "./GameCard";
import EmptyGamesState from "./EmptyGamesState";
import GameGrid from "./GameGrid";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";

const GamesList = () => {
	const { data: games, isLoading, error } = useGames();
	if (error) return <div>Error: {error.message}</div>;
	if (!games || (games && games.length === 0)) return <EmptyGamesState />;
	if (isLoading) {
		return (
			<GameGrid>
				{Array.from({ length: 10 }).map((_, index) => (
					<GameCardSkeleton key={index} />
				))}
			</GameGrid>
		);
	}
	return (
		<GameGrid>
			{games.map((game) => (
				<GameCard key={game.id} game={game} />
			))}
		</GameGrid>
	);
};

export default GamesList;
