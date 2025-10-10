import {
	type IFetchDataResponse,
	type IGame,
	type IGameQuery,
} from "@/interfaces";
import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import APIClient from "@/services/API-Client";

interface IUseGamesProps {
	gameQuery?: IGameQuery;
}

const apiClient = new APIClient<IGame>("games");

const useGames = ({ gameQuery }: IUseGamesProps) => {
	const params = useMemo(
		() => ({
			genres: gameQuery?.genre?.id,
			parent_platforms: gameQuery?.platform?.id,
			ordering: gameQuery?.sort?.value || undefined,
			search: gameQuery?.search,
		}),
		[gameQuery],
	);
	return useInfiniteQuery<IFetchDataResponse<IGame>, AxiosError>({
		queryKey: gameQuery ? ["games", params] : ["games"],
		initialPageParam: 1,
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: { ...params, page: pageParam },
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};
export default useGames;
