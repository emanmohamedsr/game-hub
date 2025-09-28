import type { IGame } from "@/interfaces";
import { Card, HStack, Image } from "@chakra-ui/react";
import GamePlatformList from "./GamePlatformList";
import CriticScore from "./CriticScore";
import { getCropedImageUrl } from "@/utils";
import GameCardContainer from "./GameCardContainer";

interface Iprops {
	game: IGame;
}

const GameCard = ({ game }: Iprops) => {
	const gamePlatforms = game.parent_platforms.map(({ platform }) => platform);
	return (
		<GameCardContainer>
			<Card.Root>
				<Image
					objectFit='cover'
					src={getCropedImageUrl({ url: game.background_image })}
					alt={game.name}
				/>
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
		</GameCardContainer>
	);
};

export default GameCard;
