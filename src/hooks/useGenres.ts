import axiosInstance from "@/config/axiosInstance.config";
import type { IFetchGenresResponse, IGenre } from "@/interfaces";
import { CanceledError, type AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGenres = () => {
	const [genres, setGenres] = useState<IGenre[]>();
	const [error, setError] = useState<AxiosError | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setIsLoading(true);
		axiosInstance
			.get<IFetchGenresResponse>("/genres", { signal })
			.then((res) => {
				setGenres(res.data.results);
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
	}, []);
	return { genres, error, isLoading };
};
export default useGenres;
