import GameCard from "./GameCard";
import EmptyGamesState from "./EmptyGamesState";
import GameGrid from "./GameGrid";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";
import type { IGenre, IPlatform, ISortingOption } from "@/interfaces";

interface IProps {
	selectedGenre: IGenre | null;
	selectedPlatform: IPlatform | null;
	selectedSort: ISortingOption | null;
	searchText: string;
}

const GamesList = ({
	selectedGenre,
	selectedPlatform,
	selectedSort,
	searchText,
}: IProps) => {
	const {
		data: games,
		isLoading,
		error,
	} = useGames({ selectedGenre, selectedPlatform, selectedSort, searchText });
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
				<GameCard game={game} key={game.id} />
			))}
		</GameGrid>
	);
};

export default GamesList;
