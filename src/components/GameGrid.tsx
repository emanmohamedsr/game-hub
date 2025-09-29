import { Center, SimpleGrid } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Iprops {
	children: ReactNode;
}

const GameGrid = ({ children }: Iprops) => {
	return (
		<Center w={"100%"}>
			<SimpleGrid
				width='100%'
				gap={{ base: 4, md: 6 }}
				columns={{ base: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}>
				{children}
			</SimpleGrid>
		</Center>
	);
};

export default GameGrid;
