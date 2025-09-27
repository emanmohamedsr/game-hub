import useGames from "@/hooks/useGames";

const GameGrid = () => {
	const { error, isLoading, games } = useGames();
	if (error) return <div>Error: {error.message}</div>;
	if (isLoading) return <div>Loading...</div>;
	return (
		<div>
			{games && games.length > 0 ? (
				games.map((game) => <div key={game.id}>{game.name}</div>)
			) : (
				<div>No games found</div>
			)}
		</div>
	);
};

export default GameGrid;
