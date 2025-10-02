import type { IGame, IGenre, IPlatform, ISortingOption } from "@/interfaces";
import useData from "./useData";
import { useMemo } from "react";

interface IUseGamesProps {
	selectedGenre: IGenre | null;
	selectedPlatform?: IPlatform | null;
	selectedSort?: ISortingOption | null;
	searchText?: string;
}

const useGames = ({
	selectedGenre,
	selectedPlatform,
	selectedSort,
	searchText,
}: IUseGamesProps) => {
	const params = useMemo(
		() => ({
			genres: selectedGenre?.id,
			platforms: selectedPlatform?.id,
			ordering: selectedSort?.value,
			search: searchText,
		}),
		[selectedGenre?.id, selectedPlatform?.id, selectedSort?.value, searchText],
	);
	return useData<IGame>({
		endpoint: "games",
		requestConfig: { params },
	});
};
export default useGames;
