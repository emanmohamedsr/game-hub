import useGameScreenshots from "@/hooks/useGameScreenShots";
import { Grid, Spinner } from "@chakra-ui/react";
import GameErrorState from "./error";

interface Iprops {
	gameId: number;
}

const GameScreenShots = ({ gameId }: Iprops) => {
	const { data, isLoading, error, isFetching, isError } =
		useGameScreenshots(gameId);
	if (isLoading || isFetching) return <Spinner />;
	if (isError || !data) return <GameErrorState error={error} />;
	console.log(data);
	return (
		<Grid gap={4} templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}>
			{data.results.map((screenshot) => (
				<img key={screenshot.id} src={screenshot.image} alt='game-screenshot' />
			))}
		</Grid>
	);
};

export default GameScreenShots;
