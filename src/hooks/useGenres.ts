import { ONE_DAY_STALETIME } from "@/components/constants";
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
		staleTime: ONE_DAY_STALETIME,
		initialData: genres,
	});

export default useGenres;
