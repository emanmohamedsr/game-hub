import type { IPlatform } from "@/interfaces";
import useData from "./useData";

const usePlatforms = () =>
	useData<IPlatform>({ endpoint: "platforms/lists/parents" });
export default usePlatforms;
