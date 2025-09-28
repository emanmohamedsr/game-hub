import { Card, HStack, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card.Root borderRadius={"md"} overflow={"hidden"}>
			<Skeleton height='200px' w={"100%"} />
			<Card.Body gap='2'>
				<Skeleton height='20px' width='80%' />
				<HStack justifyContent='space-between'>
					<Skeleton height='20px' w={"60%"} />
					<Skeleton height='20px' w={"10%"} />
				</HStack>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCardSkeleton;
