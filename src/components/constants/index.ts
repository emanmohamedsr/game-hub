import type { ISortingOption } from "@/interfaces";

export const sortingOptions: ISortingOption[] = [
	{ name: "All", value: "all" },
	{ name: "Relevance", value: "" },
	{ name: "Date added", value: "-added" },
	{ name: "Release date", value: "-released" },
	{ name: "Name", value: "name" },
	{ name: "Popularity", value: "-metacritic" },
	{ name: "Average rating", value: "-rating" },
];
