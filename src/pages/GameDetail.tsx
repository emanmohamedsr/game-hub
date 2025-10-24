import GameErrorState from "@/components/error";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import {
	Box,
	Button,
	Grid,
	GridItem,
	Heading,
	Icon,
	Text,
} from "@chakra-ui/react";
import { IoArrowUndoOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const GameDetailPage = () => {
	const navigate = useNavigate();
	const back = () => navigate(-1);
	const { slug } = useParams();
	const { data, isLoading, isFetching, error, isError } = useGame(slug!);
	if (isLoading || isFetching) return <Box>Loading...</Box>;
	if (isError || !data) return <GameErrorState error={error} />;
	return (
		<Box>
			<Button
				mb={4}
				ml={-4}
				onClick={back}
				_hover={{
					background: "transparent",
					opacity: ".8",
				}}
				variant={"ghost"}>
				<Icon as={IoArrowUndoOutline}></Icon>
				<Text fontWeight={"bold"} fontSize={{ base: "ml", md: "xl" }}>
					Back
				</Text>
			</Button>

			<Grid gap={8} templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
				<GridItem>
					<Heading
						fontWeight={"bold"}
						fontSize={{ base: "ml", md: "xl" }}
						mb={4}>
						{data.name}
					</Heading>
					<ExpandableText text={data.description_raw} limit={300} />
					<GameAttributes game={data} />
				</GridItem>
				<GridItem>
					<GameTrailer gameId={data.id} />
					<GameScreenShots gameId={data.id} />
				</GridItem>
			</Grid>
		</Box>
	);
};

export default GameDetailPage;
