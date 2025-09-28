import type { IGenre } from "@/interfaces";
import useData from "./useData";

const useGenres = () => useData<IGenre>({ endpoint: "genres" });
export default useGenres;
