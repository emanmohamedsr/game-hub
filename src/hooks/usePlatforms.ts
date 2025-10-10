import axiosInstance from "@/config/axiosInstance.config";
import platforms from "@/data/platforms";
import type { IPlatform } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";

export interface IFetchDataResponse<T> {
	count: number;
	results: T[];
}

const usePlatforms = () => {
	const fetchPlatforms = () =>
		axiosInstance
			.get("/platforms/lists/parents")
			.then((res: AxiosResponse<IFetchDataResponse<IPlatform>>) => res.data);

	return useQuery<IFetchDataResponse<IPlatform>, AxiosError>({
		queryKey: ["platforms"],
		queryFn: fetchPlatforms,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: platforms.length, results: platforms },
	});
};
export default usePlatforms;
