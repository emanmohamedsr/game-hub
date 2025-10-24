import type { IGame } from "@/interfaces";
import { Grid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface IProps {
	game: IGame;
}

const GameAttributes = ({ game }: IProps) => {
	return (
		<Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} mt={6}>
			<DefinitionItem title='Platforms'>
				{game.parent_platforms?.map(({ platform }, index) => (
					<Text key={index}>{platform.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem title='MetaScore'>
				<CriticScore score={game.metacritic} />
			</DefinitionItem>
			<DefinitionItem title='Genres'>
				{game.genres?.map((genre, index) => (
					<Text key={index}>{genre.name}</Text>
				))}
			</DefinitionItem>
			<DefinitionItem title='Publishers'>
				{game.publishers?.map(({ name, id }) => (
					<Text key={id}>{name}</Text>
				))}
			</DefinitionItem>
		</Grid>
	);
};

export default GameAttributes;
