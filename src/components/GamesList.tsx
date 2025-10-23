import useGames from "@/hooks/useGames";
import useGameQueryStore from "@/store";
import { Skeleton, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import EmptyGamesState from "./EmptyGamesState";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameGrid from "./GameGrid";
import { Fragment } from "react/jsx-runtime";
import GameErrorState from "./error";

const GamesList = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	const { data, isLoading, isFetching, error, fetchNextPage, hasNextPage } =
		useGames({
			gameQuery,
		});
	if (error) return <GameErrorState error={error} />;
	if (isLoading || (isFetching && !data)) {
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
	if (data?.pages?.[0]?.results.length === 0) return <EmptyGamesState />;

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
			<GameGrid>
				{data?.pages.map((page, pageIndex) => (
					<Fragment key={pageIndex}>
						{page.results.map((game) => (
							<GameCard game={game} key={game.id} />
						))}
					</Fragment>
				))}
			</GameGrid>
		</InfiniteScroll>
	);
};

export default GamesList;
