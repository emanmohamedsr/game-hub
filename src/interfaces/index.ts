export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
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
