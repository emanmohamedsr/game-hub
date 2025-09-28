import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Iprops {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Iprops) => {
	return (
		<Box
			width={{ base: "160px", sm: "250px", md: "260px" }}
			borderRadius={"md"}
			overflow={"hidden"}>
			{children}
		</Box>
	);
};

export default GameCardContainer;
