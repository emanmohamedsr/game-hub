import type { IGame } from "@/interfaces";
import useData from "./useData";

const useGames = () => useData<IGame>({ endpoint: "games" });
export default useGames;
