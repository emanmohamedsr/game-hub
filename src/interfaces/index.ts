export interface IFetchDataResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

export interface IPublisher {
	id: number;
	name: string;
}

export interface IGame {
	id: number;
	slug: string;
	name: string;
	genres: IGenre[];
	publishers: IPublisher[];
	description_raw: string;
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

export interface IGameTrailers {
	id: number;
	name: string;
	preview: string;
	data: {
		480: string;
		max: string;
	};
}
