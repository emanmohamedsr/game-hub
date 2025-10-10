import type { IFetchDataResponse, IPlatform } from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import platforms from "@/data/platforms";

const apiClient = new APIClient<IPlatform>("platforms/lists/parents");

const usePlatforms = () =>
	useQuery<IFetchDataResponse<IPlatform>, AxiosError>({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: platforms.length, results: platforms, next: null },
	});

export default usePlatforms;
