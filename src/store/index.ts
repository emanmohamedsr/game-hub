import type { IGameQuery } from "@/interfaces";
import { create } from "zustand";

interface IGameQueryStore {
	gameQuery: IGameQuery;
	setSearchText: (searchText?: string) => void;
	setGenreId: (genreId?: number) => void;
	setPlatformId: (platformId?: number) => void;
	setSortOrder: (sortOrder?: string) => void;
}

const useGameQueryStore = create<IGameQueryStore>((set) => ({
	gameQuery: {} as IGameQuery,
	setSearchText: (searchText) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, search: searchText } })),
	setGenreId: (genreId) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
	setPlatformId: (platformId) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
	setSortOrder: (sortOrder) =>
		set((state) => ({ gameQuery: { ...state.gameQuery, sortVal: sortOrder } })),
}));
export default useGameQueryStore;
