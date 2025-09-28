import axiosInstance from "@/config/axiosInstance.config";
import type { IFetchGamesResponse, IGame } from "@/interfaces";
import { CanceledError, type AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGames = () => {
	const [games, setGames] = useState<IGame[]>();
	const [error, setError] = useState<AxiosError | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setIsLoading(true);
		axiosInstance
			.get<IFetchGamesResponse>("/games", { signal })
			.then((res) => {
				setGames(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) {
					setIsLoading(false);
					return;
				}
				setIsLoading(false);
				setError(err);
			});
		return () => controller.abort();
	}, []);
	return { games, error, isLoading };
};
export default useGames;
