import genres from "@/data/genres";
import type { IFetchDataResponse, IGenre } from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const apiClient = new APIClient<IGenre>("genres");

const useGenres = () =>
	useQuery<IFetchDataResponse<IGenre>, AxiosError>({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: genres,
	});

export default useGenres;
