import { useColorMode } from "@/hooks/useColorMode";
import { getCroppedText } from "@/utils";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Iprops {
	text: string;
	limit?: number;
}

const ExpandableText = ({ text, limit = 300 }: Iprops) => {
	const { colorMode } = useColorMode();
	const [isExpanded, setIsExpanded] = useState(false);
	const ToggleIsExpanded = () => setIsExpanded((prev) => !prev);
	return (
		<HStack flexWrap={"wrap"} gap={2}>
			<Text>
				{isExpanded ? text : getCroppedText({ text: text, length: limit })}
			</Text>
			<Button
				size={"xs"}
				fontWeight={"bold"}
				onClick={ToggleIsExpanded}
				bg={
					colorMode === "light"
						? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
						: "linear-gradient(to right, #97266d, #6b46c1)"
				}
				color={colorMode === "light" ? "black" : "white"}>
				{isExpanded ? "See Less" : "See More"}
			</Button>
		</HStack>
	);
};

export default ExpandableText;
