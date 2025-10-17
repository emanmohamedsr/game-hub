import { useColorMode } from "@/hooks/useColorMode";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			bgGradient='linear(to-br, purple.700, pink.500)'
			minH='100vh'
			display='flex'
			alignItems='center'
			justifyContent='center'
			color='white'
			textAlign='center'
			px={6}>
			<VStack gap={6}>
				<Heading
					color={colorMode === "light" ? "purple.700" : "pink.300"}
					fontSize={{ base: "6xl", md: "8xl" }}
					fontWeight='extrabold'>
					404
				</Heading>
				<Text
					color={colorMode === "light" ? "black" : "white"}
					fontWeight={"md"}
					fontSize={{ base: "lg", md: "xl" }}>
					Oops! The page you’re looking for doesn’t exist.
				</Text>
				<Link to='/'>
					<Button
						size='lg'
						bg={
							colorMode === "light"
								? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
								: "linear-gradient(to right, #97266d, #6b46c1)"
						}
						color={colorMode === "light" ? "black" : "white"}
						_hover={{ bg: "pink.100" }}
						borderRadius='full'
						px={8}
						shadow='lg'>
						Go Home
					</Button>
				</Link>
			</VStack>
		</Box>
	);
};

export default PageNotFound;
