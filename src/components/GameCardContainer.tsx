import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Iprops {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Iprops) => {
	return (
		<Box
			width={{
				base: "160px",
				sm: "300px",
				lg: "210px",
				md: "260px",
				"2xl": "280px",
			}}
			borderRadius={"md"}
			overflow={"hidden"}>
			{children}
		</Box>
	);
};

export default GameCardContainer;
