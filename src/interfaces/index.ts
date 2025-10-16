export interface IFetchDataResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
	rating: number;
}

export interface IPlatform {
	id: number;
	name: string;
	slug: string;
}

export interface IGenre {
	id: number;
	name: string;
	image_background: string;
}

export interface ISortingOption {
	name: string;
	value: string;
}

export interface IGameQuery {
	genreId?: number;
	platformId?: number;
	sortVal?: string;
	search?: string;
}
