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

export const ONE_DAY_STALETIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
