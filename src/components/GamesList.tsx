import useGames from "@/hooks/useGames";
import { Skeleton, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import EmptyGamesState from "./EmptyGamesState";
import Error from "./error/Error";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameGrid from "./GameGrid";
import useGameQueryStore from "@/store";

const GamesList = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames({
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
	const fetchedGamesCount =
		data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			next={() => fetchNextPage()}
			hasMore={!!hasNextPage}
			loader={<Spinner size={"md"} my={4} />}
			endMessage={
				<Text
					textAlign='center'
					my={4}
					fontWeight='bold'
					fontSize={{ base: "md", md: "lg" }}>
					You have seen it all!
				</Text>
			}>
			{data?.pages.map((page, pageIndex) => (
				<GameGrid key={pageIndex}>
					{page.results.map((game) => (
						<GameCard game={game} key={game.id} />
					))}
				</GameGrid>
			))}
		</InfiniteScroll>
	);
};

export default GamesList;
