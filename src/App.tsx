import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import { useColorMode } from "./hooks/useColorMode";

const App = () => {
	const { colorMode } = useColorMode();
	return (
		<HStack
			flexDir={"column"}
			h={"100vh"}
			justify={"center"}
			align={"center"}
			gap={4}
			padding={4}>
			<ColorModeButton />
			<Heading
				color={colorMode === "light" ? "white" : "black"}
				textShadow={
					colorMode === "light"
						? "0px 0px 2px rgba(0, 0, 0, 1)"
						: "0px 0px 2px rgba(255, 255, 255, 1)"
				}>
				EMAN MOHAMED SOLIMAN
			</Heading>
			<Box spaceX={4}>
				<Button colorPalette={"pink"} variant={"subtle"}>
					PINK
				</Button>
				<Button colorPalette={"blue"} variant={"subtle"}>
					BLUE
				</Button>
			</Box>
		</HStack>
	);
};

export default App;
