import axiosInstance from "@/config/axiosInstance.config";
import genres from "@/data/genres";
import type { IGenre } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

export interface IFetchDataResponse<T> {
	count: number;
	results: T[];
}

const useGenres = () => {
	const fetchGenres = () =>
		axiosInstance
			.get("/genres")
			.then((res: AxiosResponse<IFetchDataResponse<IGenre>>) => res.data);

	return useQuery<IFetchDataResponse<IGenre>, AxiosError>({
		queryKey: ["genres"],
		queryFn: fetchGenres,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: 0, results: genres },
	});
};
export default useGenres;
