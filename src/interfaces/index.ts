export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
}

export interface IFetchGamesResponse {
	count: number;
	results: IGame[];
}

export interface IPlatform {
	id: number;
	name: string;
	slug: string;
}

export interface IFetchGenresResponse {
	count: number;
	results: IGenre[];
}

export interface IGenre {
	id: number;
	name: string;
}
