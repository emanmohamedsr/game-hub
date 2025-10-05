import type { AxiosError } from "axios";
import { Center, VStack, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { LuTriangleAlert } from "react-icons/lu";

interface IProps {
	error: AxiosError;
	onRetry?: () => void;
}

const Error = ({ error, onRetry }: IProps) => {
	return (
		<Center
			w={"100%"}
			bgGradient='linear(to-br, gray.50, gray.100)'
			_dark={{
				bgGradient: "linear(to-br, gray.900, gray.800)",
			}}
			px={4}>
			<VStack
				gap={5}
				textAlign='center'
				p={8}
				borderRadius='2xl'
				shadow='xl'
				bg='whiteAlpha.800'
				_dark={{ bg: "blackAlpha.500" }}
				backdropFilter='blur(10px)'>
				<Icon as={LuTriangleAlert} boxSize={12} color='red.400' />
				<Heading
					as='h1'
					fontSize={{ base: "2xl", md: "3xl" }}
					fontWeight='bold'
					color='red.500'>
					Oops! Something went wrong.
				</Heading>
				<Text fontSize='lg' color='gray.600' _dark={{ color: "gray.300" }}>
					{error.code ? `${error.code}: ${error.message}` : error.message}
				</Text>
				{onRetry && (
					<Button
						mt={4}
						size='lg'
						colorPalette='red'
						onClick={onRetry}
						_dark={{ colorPalette: "red" }}>
						Try Again
					</Button>
				)}
			</VStack>
		</Center>
	);
};

export default Error;
