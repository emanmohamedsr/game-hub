import axiosInstance from "@/config/axiosInstance.config";
import type { IFetchDataResponse } from "@/interfaces";
import type { AxiosRequestConfig } from "axios";

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (requestConfig?: AxiosRequestConfig) =>
		axiosInstance
			.get<IFetchDataResponse<T>>(`/${this.endpoint}`, requestConfig)
			.then((res) => res.data);
}

export default APIClient;
