import { Card, HStack, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card.Root maxW='sm' overflow='hidden' borderRadius='md'>
			<Skeleton
				height='200px'
				width={{ base: "200px", sm: "250px", lg: "300px" }}
			/>
			<Card.Body gap='2'>
				<Skeleton height='20px' width='80%' />
				<HStack justifyContent='space-between'>
					<Skeleton height='20px' w={"60%"} />
					<Skeleton height='20px' w={"10%"} />
				</HStack>
			</Card.Body>
			{/* <Card.Footer>
				<Skeleton height='20px' width='30%' />
			</Card.Footer> */}
		</Card.Root>
	);
};

export default GameCardSkeleton;
