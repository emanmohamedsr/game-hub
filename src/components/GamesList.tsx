import GameCard from "./GameCard";
import EmptyGamesState from "./EmptyGamesState";
import GameGrid from "./GameGrid";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";
import type { IGameQuery } from "@/interfaces";
import Error from "./error/Error";
import { useColorMode } from "@/hooks/useColorMode";
import { Button, Skeleton, Spinner } from "@chakra-ui/react";

interface IProps {
	gameQuery?: IGameQuery;
}

const GamesList = ({ gameQuery }: IProps) => {
	const { colorMode } = useColorMode();
	const {
		data,
		isLoading,
		error,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
	} = useGames({
		gameQuery,
	});
	if (error)
		return <Error error={error} onRetry={() => window.location.reload()} />;
	if (!data) return <EmptyGamesState />;
	if (isLoading) {
		return (
			<>
				<GameGrid>
					{Array.from({ length: 10 }).map((_, index) => (
						<GameCardSkeleton key={index} />
					))}
				</GameGrid>
				<Skeleton
					height={{ base: "40px", md: "50px" }}
					width={{ base: "100px", md: "150px" }}
					mx={"auto"}
					my={4}
					borderRadius={"md"}
					animation='wave'
				/>
			</>
		);
	}
	return (
		<>
			{data?.pages.map((page, pageIndex) => (
				<GameGrid key={pageIndex}>
					{page.results.map((game) => (
						<GameCard game={game} key={game.id} />
					))}
				</GameGrid>
			))}
			{hasNextPage && (
				<Button
					_disabled={{
						opacity: 0.5,
						cursor: "not-allowed",
					}}
					disabled={isFetchingNextPage}
					onClick={() => fetchNextPage()}
					mx={"auto"}
					my={4}
					p={6}
					borderRadius={"md"}
					color={colorMode === "light" ? "black" : "white"}
					fontWeight={"bold"}
					bgGradient={
						colorMode === "light"
							? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
							: "linear-gradient(to right, #97266d, #6b46c1)"
					}
					_hover={{
						opacity: 0.8,
					}}>
					{isFetchingNextPage && <Spinner size='sm' />}
					{isFetchingNextPage
						? "Loading..."
						: hasNextPage
						? "Load More"
						: "No More Games"}
				</Button>
			)}
		</>
	);
};

export default GamesList;
