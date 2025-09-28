import { Center, SimpleGrid } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Iprops {
	children: ReactNode;
}

const GameGrid = ({ children }: Iprops) => {
	return (
		<Center>
			<SimpleGrid
				gap={{ base: 4, md: 6 }}
				columns={{ base: 1, md: 2, xl: 3, "2xl": 4 }}
				p={2}>
				{children}
			</SimpleGrid>
		</Center>
	);
};

export default GameGrid;
