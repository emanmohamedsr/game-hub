import { type IFetchDataResponse, type IGameTrailers } from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useGameTrailers = (id: number) => {
	const apiClient = new APIClient<IGameTrailers>(`games/${id}/movies`);
	return useQuery<IFetchDataResponse<IGameTrailers>, AxiosError>({
		queryKey: ["game-trailers", id],
		queryFn: apiClient.getAll,
	});
};
export default useGameTrailers;
