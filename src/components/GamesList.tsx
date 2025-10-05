import GameCard from "./GameCard";
import EmptyGamesState from "./EmptyGamesState";
import GameGrid from "./GameGrid";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";
import type { IGameQuery } from "@/interfaces";
import Error from "./error/Error";

interface IProps {
	gameQuery?: IGameQuery;
}

const GamesList = ({ gameQuery }: IProps) => {
	const { data: games, isLoading, error } = useGames({ gameQuery });
	if (error)
		return <Error error={error} onRetry={() => window.location.reload()} />;
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
				<GameCard game={game} key={game.id} />
			))}
		</GameGrid>
	);
};

export default GamesList;
