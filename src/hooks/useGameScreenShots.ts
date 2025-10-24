import { type IFetchDataResponse, type IGameScreenshots } from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useGameScreenshots = (id: number) => {
	const apiClient = new APIClient<IGameScreenshots>(`games/${id}/screenshots`);
	return useQuery<IFetchDataResponse<IGameScreenshots>, AxiosError>({
		queryKey: ["game-screenshots", id],
		queryFn: apiClient.getAll,
	});
};
export default useGameScreenshots;
