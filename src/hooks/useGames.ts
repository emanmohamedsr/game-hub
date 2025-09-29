import type { IGame, IGenre } from "@/interfaces";
import useData from "./useData";
import { useMemo } from "react";

interface IUseGamesProps {
	selectedGenre: IGenre | null;
}

const useGames = ({ selectedGenre }: IUseGamesProps) => {
	const params = useMemo(
		() => ({
			genres: selectedGenre?.id,
		}),
		[selectedGenre?.id],
	);
	return useData<IGame>({
		endpoint: "games",
		requestConfig: { params },
	});
};
export default useGames;
