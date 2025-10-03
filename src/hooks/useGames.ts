import type { IGame, IGameQuery } from "@/interfaces";
import useData from "./useData";
import { useMemo } from "react";

interface IUseGamesProps {
	gameQuery?: IGameQuery;
}

const useGames = ({ gameQuery }: IUseGamesProps) => {
	const params = useMemo(
		() => ({
			genres: gameQuery?.genre?.id,
			platforms: gameQuery?.platform?.id,
			ordering: gameQuery?.sort?.value,
			search: gameQuery?.search,
		}),
		[gameQuery],
	);
	return useData<IGame>({
		endpoint: "games",
		requestConfig: { params },
	});
};
export default useGames;
