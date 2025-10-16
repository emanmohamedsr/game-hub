import { ONE_DAY_STALETIME } from "@/components/constants";
import {
	type IFetchDataResponse,
	type IGame,
	type IGameQuery,
} from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

interface IUseGamesProps {
	gameQuery?: IGameQuery;
}

const apiClient = new APIClient<IGame>("games");

const useGames = ({ gameQuery }: IUseGamesProps) => {
	return useInfiniteQuery<IFetchDataResponse<IGame>, AxiosError>({
		queryKey: ["games", gameQuery || {}],
		initialPageParam: 1,
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery?.genreId,
					parent_platforms: gameQuery?.platformId,
					ordering: gameQuery?.sortVal,
					search: gameQuery?.search,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ONE_DAY_STALETIME,
	});
};
export default useGames;
