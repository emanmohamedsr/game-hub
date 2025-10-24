import { useColorMode } from "@/hooks/useColorMode";
import { Center, VStack, Icon, Heading, Text } from "@chakra-ui/react";
import { LuTriangleAlert } from "react-icons/lu";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorBoundary = () => {
	const error = useRouteError();
	const { colorMode } = useColorMode();

	// Detect if it's a router error (like 404)
	const message = isRouteErrorResponse(error)
		? `${error.status} ${error.statusText}`
		: error instanceof Error
		? error.message
		: "Something went wrong.";

	return (
		<Center
			minH={"100vh"}
			bg={
				colorMode === "light"
					? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
					: "linear-gradient(to right, #97266d, #6b46c1)"
			}
			px={6}>
			<VStack
				gap={4}
				p={8}
				borderRadius='2xl'
				bg='whiteAlpha.900'
				_dark={{ bg: "blackAlpha.400" }}
				shadow='xl'
				textAlign='center'>
				<Icon as={LuTriangleAlert} boxSize={12} color='white' />
				<Heading fontSize='2xl' color='white'>
					Oops! Something went wrong.
				</Heading>
				<Text color='gray.600' _dark={{ color: "gray.300" }}>
					{message}
				</Text>
				<Link to='/'>
					<Text textDecoration={"underline"}>Back to Home</Text>
				</Link>
			</VStack>
		</Center>
	);
};

export default ErrorBoundary;
