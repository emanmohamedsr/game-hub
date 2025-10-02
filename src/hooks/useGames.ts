import type { IGame, IGenre, IPlatform, ISortingOption } from "@/interfaces";
import useData from "./useData";
import { useMemo } from "react";

interface IUseGamesProps {
	selectedGenre: IGenre | null;
	selectedPlatform?: IPlatform | null;
	selectedSort?: ISortingOption | null;
}

const useGames = ({
	selectedGenre,
	selectedPlatform,
	selectedSort,
}: IUseGamesProps) => {
	const params = useMemo(
		() => ({
			genres: selectedGenre?.id,
			platforms: selectedPlatform?.id,
			ordering: selectedSort?.value,
		}),
		[selectedGenre?.id, selectedPlatform?.id, selectedSort?.value],
	);
	return useData<IGame>({
		endpoint: "games",
		requestConfig: { params },
	});
};
export default useGames;
