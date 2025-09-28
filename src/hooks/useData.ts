import axiosInstance from "@/config/axiosInstance.config";
import { CanceledError, type AxiosError } from "axios";
import { useEffect, useState } from "react";

export interface IFetchDataResponse<T> {
	count: number;
	results: T[];
}

interface IProps {
	endpoint: string;
}

const useData = <T>({ endpoint }: IProps) => {
	const [data, setData] = useState<T[]>();
	const [error, setError] = useState<AxiosError | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setIsLoading(true);
		axiosInstance
			.get<IFetchDataResponse<T>>(`/${endpoint}`, { signal })
			.then((res) => {
				setData(res.data.results);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) {
					setIsLoading(false);
					return;
				}
				setIsLoading(false);
				setError(err);
			});
		return () => controller.abort();
	}, [endpoint]);
	return { data, error, isLoading };
};

export default useData;
