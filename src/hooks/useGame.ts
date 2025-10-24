import { type IGame } from "@/interfaces";
import APIClient from "@/services/API-Client";
import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

const useGame = (slug: string) => {
	const apiClient = new APIClient<IGame>(`games`);
	return useQuery<IGame, AxiosError>({
		queryKey: ["game", slug],
		queryFn: () => apiClient.getBy(slug),
	});
};
export default useGame;
