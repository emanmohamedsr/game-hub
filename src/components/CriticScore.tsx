import { Badge } from "@chakra-ui/react";

interface Iprops {
	score: number;
}

const CriticScore = ({ score }: Iprops) => {
	const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
	return (
		<Badge
			colorPalette={color}
			px={2}
			py={1}
			fontSize={{ base: "0.8rem", md: "1rem" }}
			fontWeight='bold'
			borderRadius='md'>
			{score}
		</Badge>
	);
};

export default CriticScore;
