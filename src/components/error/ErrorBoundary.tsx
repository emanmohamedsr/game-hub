import { Center, VStack, Icon, Heading, Text, Button } from "@chakra-ui/react";
import { LuTriangleAlert } from "react-icons/lu";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorBoundary = () => {
	const error = useRouteError();

	// Detect if it's a router error (like 404)
	const message = isRouteErrorResponse(error)
		? `${error.status} ${error.statusText}`
		: error instanceof Error
		? error.message
		: "Something went wrong.";

	return (
		<Center
			minH='100vh'
			bgGradient='linear(to-br, red.50, orange.100)'
			_dark={{ bgGradient: "linear(to-br, gray.900, red.800)" }}
			px={6}>
			<VStack
				gap={4}
				p={8}
				borderRadius='2xl'
				bg='whiteAlpha.900'
				_dark={{ bg: "blackAlpha.400" }}
				shadow='xl'
				textAlign='center'>
				<Icon as={LuTriangleAlert} boxSize={12} color='red.500' />
				<Heading fontSize='2xl' color='red.600'>
					Oops! Something went wrong.
				</Heading>
				<Text color='gray.600' _dark={{ color: "gray.300" }}>
					{message}
				</Text>
				<Button colorScheme='red' onClick={() => (window.location.href = "/")}>
					Back to Home
				</Button>
			</VStack>
		</Center>
	);
};

export default ErrorBoundary;
