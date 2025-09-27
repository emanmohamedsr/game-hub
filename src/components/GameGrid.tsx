import axiosInstance from "@/config/axiosInstance.config";
import type { IFetchGamesResponse, IGame } from "@/interfaces/game";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const GameGrid = () => {
	const [games, setGames] = useState<IGame[]>([]);
	const [error, setError] = useState<AxiosError | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		axiosInstance
			.get<IFetchGamesResponse>("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err))
			.finally(() => setIsLoading(false));
	}, []);

	if (error) return <div>Error: {error.message}</div>;
	if (isLoading) return <div>Loading...</div>;
	if (games.length === 0) return <div>No games found</div>;
	return (
		<div>
			{games.map((game) => (
				<div key={game.id}>{game.name}</div>
			))}
		</div>
	);
};

export default GameGrid;
