export interface IFetchGamesResponse {
	count: number;
	results: IGame[];
}

export interface IGame {
	id: number;
	name: string;
}
