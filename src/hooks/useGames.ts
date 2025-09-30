import type { IGame, IGenre, IPlatform } from "@/interfaces";
import useData from "./useData";
import { useMemo } from "react";

interface IUseGamesProps {
	selectedGenre: IGenre | null;
	selectedPlatform?: IPlatform | null;
}

const useGames = ({ selectedGenre, selectedPlatform }: IUseGamesProps) => {
	const params = useMemo(
		() => ({
			genres: selectedGenre?.id,
			platforms: selectedPlatform?.id,
		}),
		[selectedGenre?.id, selectedPlatform?.id],
	);
	return useData<IGame>({
		endpoint: "games",
		requestConfig: { params },
	});
};
export default useGames;
