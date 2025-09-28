import type { IGame } from "@/interfaces";
import { Card, HStack, Image } from "@chakra-ui/react";
import GamePlatformList from "./GamePlatformList";
import CriticScore from "./CriticScore";

interface Iprops {
	game: IGame;
}

const GameCard = ({ game }: Iprops) => {
	const gamePlatforms = game.parent_platforms.map(({ platform }) => platform);
	return (
		<Card.Root maxW='sm' overflow='hidden' borderRadius='md'>
			<Image objectFit='cover' src={game.background_image} alt={game.name} />
			<Card.Body gap='2'>
				<Card.Title>{game.name}</Card.Title>
				<Card.Description></Card.Description>
				<HStack justifyContent='space-between'>
					<GamePlatformList platforms={gamePlatforms} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</Card.Body>
			<Card.Footer></Card.Footer>
		</Card.Root>
	);
};

export default GameCard;
