import type { IGame } from "@/interfaces";
import { Card, HStack, Image } from "@chakra-ui/react";
import GamePlatformList from "./GamePlatformList";
import CriticScore from "./CriticScore";
import { getCroppedText, getCroppedImageUrl } from "@/utils";
import fallbackImage from "@/assets/no-image-placeholder.webp";
import GameStars from "./GameStars";
import { Link } from "react-router-dom";

interface Iprops {
	game: IGame;
}

const GameCard = ({ game }: Iprops) => {
	const gamePlatforms =
		game.parent_platforms?.map(({ platform }) => platform) ?? [];

	return (
		<Link to={`/games/${game.slug}`}>
			<Card.Root
				borderRadius={"md"}
				overflow={"hidden"}
				cursor='pointer'
				_hover={{ boxShadow: "lg", transform: "scale(1.03)" }}
				transition='all ease-in-out 0.3s'>
				<Image
					objectFit='cover'
					src={
						getCroppedImageUrl({ url: game.background_image }) || fallbackImage
					}
					alt={game.name}
				/>
				<Card.Body gap='12px'>
					<Card.Title fontSize={"sm"} fontWeight='bold' spaceY={1}>
						{getCroppedText({ text: game.name })}
					</Card.Title>
					<HStack justifyContent='space-between' alignItems='start'>
						<GamePlatformList platforms={gamePlatforms} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<GameStars rating={game.rating} />
				</Card.Body>
			</Card.Root>
		</Link>
	);
};

export default GameCard;
