import type { IGame } from "@/interfaces";
import { Card, HStack, Image } from "@chakra-ui/react";
import GamePlatformList from "./GamePlatformList";
import CriticScore from "./CriticScore";
import { getCroppedText, getCroppedImageUrl } from "@/utils";
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
					src={getCroppedImageUrl({ url: game.background_image })}
					alt={game.name}
				/>
				<Card.Body gap='12px'>
					<Card.Title fontSize={"lg"} fontWeight='bold'>
						{getCroppedText({ title: game.name })}
					</Card.Title>
					<HStack justifyContent='space-between' alignItems='start'>
						<GamePlatformList platforms={gamePlatforms} />
						<CriticScore score={game.metacritic} />
					</HStack>
				</Card.Body>
			</Card.Root>
		</GameCardContainer>
	);
};

export default GameCard;
