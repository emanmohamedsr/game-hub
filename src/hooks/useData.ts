import type { IFetchDataResponse } from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, type AxiosRequestConfig } from "axios";

interface IProps {
	endpoint: string;
	requestConfig?: AxiosRequestConfig;
	queryConfig?: object;
}

const useData = <T>({ endpoint, requestConfig, queryConfig }: IProps) => {
	const apiClient = new APIClient<T>(endpoint);
	return useQuery<IFetchDataResponse<T>, AxiosError>({
		queryKey: requestConfig ? [endpoint, requestConfig] : [endpoint],
		queryFn: apiClient.getAll,
		...queryConfig,
	});
};

export default useData;
