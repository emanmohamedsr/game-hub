import type { IGame } from "@/interfaces";
import { Card, Image } from "@chakra-ui/react";
import GamePlatformList from "./GamePlatformList";

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
				<GamePlatformList platforms={gamePlatforms} />
			</Card.Body>
			<Card.Footer></Card.Footer>
		</Card.Root>
	);
};

export default GameCard;
