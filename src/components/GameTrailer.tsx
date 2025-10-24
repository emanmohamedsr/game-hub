import useGameTrailers from "@/hooks/useGameTrailers";
import GameErrorState from "./error";
import { AspectRatio, Box, Spinner } from "@chakra-ui/react";

interface Iprops {
	gameId: number;
}

const GameTrailer = ({ gameId }: Iprops) => {
	const { data, isLoading, isFetching, error, isError } =
		useGameTrailers(gameId);
	const firstTrailer = data?.results[0];

	if (isLoading || isFetching) return <Spinner />;
	if (isError || !data) return <GameErrorState error={error} />;
	return firstTrailer ? (
		<Box
			borderRadius='md'
			overflow='hidden'
			boxShadow='lg'
			bg='gray.900'
			_hover={{ boxShadow: "xl" }}
			maxW='800px'
			my={6}>
			<AspectRatio ratio={16 / 9}>
				<video
					src={firstTrailer?.data?.[480]}
					poster={firstTrailer?.preview}
					controls
				/>
			</AspectRatio>
		</Box>
	) : null;
};

export default GameTrailer;
