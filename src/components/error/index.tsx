import { VStack, Center, Icon, Text, Button } from "@chakra-ui/react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { AxiosError } from "axios";

interface Props {
	error: AxiosError | Error | unknown;
	onRetry?: () => void;
}

const GameErrorState = ({ error, onRetry }: Props) => {
	const status =
		error instanceof AxiosError ? `${error.response?.status} Error` : "Error";
	const message =
		error instanceof AxiosError
			? error.response?.data?.message || error.message
			: error instanceof Error
			? error.message
			: "Something went wrong.";

	return (
		<Center w={"100%"} minH='50vh' px={4}>
			<VStack
				gap={4}
				p={8}
				borderRadius='2xl'
				shadow='md'
				bgGradient='linear(to-br, gray.50, whiteAlpha.900)'
				_dark={{
					bgGradient: "linear(to-br, gray.800, blackAlpha.400)",
				}}>
				<Icon as={MdOutlineReportGmailerrorred} boxSize={12} color='gray.400' />
				<Text fontSize='lg' fontWeight='bold'>
					{status}
				</Text>
				<Text
					color='gray.500'
					_dark={{ color: "gray.300" }}
					maxW='sm'
					textAlign='center'>
					{message}
				</Text>
				{onRetry && (
					<Button colorScheme='teal' onClick={onRetry}>
						Try Again
					</Button>
				)}
			</VStack>
		</Center>
	);
};

export default GameErrorState;
