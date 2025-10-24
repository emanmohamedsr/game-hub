import { useColorMode } from "@/hooks/useColorMode";
import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface IProps {
	title: string;
	children?: ReactNode;
}

const DefinitionItem = ({ title, children }: IProps) => {
	const { colorMode } = useColorMode();
	return (
		<Box>
			<Heading
				color={colorMode === "light" ? "gray.300" : "gray.600"}
				fontSize={{ base: "md", md: "lg" }}
				fontWeight={"bold"}
				mb={2}>
				{title}
			</Heading>
			<Box>{children}</Box>
		</Box>
	);
};

export default DefinitionItem;
