export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
}

export interface IPlatform {
	id: number;
	name: string;
	slug: string;
}

export interface IGenre {
	id: number;
	name: string;
}
