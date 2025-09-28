import { Center, SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

interface Iprops {
	count?: number;
}

const GameGridSkeleton = ({ count = 10 }: Iprops) => {
	return (
		<Center>
			<SimpleGrid
				gap={{ base: 4, md: 6 }}
				columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
				p={2}>
				{Array.from({ length: count }).map((_, index) => (
					<GameCardSkeleton key={index} />
				))}
			</SimpleGrid>
		</Center>
	);
};

export default GameGridSkeleton;
