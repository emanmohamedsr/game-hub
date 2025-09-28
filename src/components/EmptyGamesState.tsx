import { EmptyState, HStack, VStack } from "@chakra-ui/react";
import { PiGameControllerFill } from "react-icons/pi";

interface Iprops {
	title?: string;
	description?: string;
}

const EmptyGamesState = ({
	title = "There are no games here",
	description = "Explore our vast collection",
}: Iprops) => {
	return (
		<HStack justifyContent='center' alignItems={"center"}>
			<EmptyState.Root size={{ base: "sm", md: "md", lg: "lg" }}>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<PiGameControllerFill />
					</EmptyState.Indicator>
					<VStack textAlign='center'>
						<EmptyState.Title>{title}</EmptyState.Title>
						<EmptyState.Description>{description}</EmptyState.Description>
					</VStack>
				</EmptyState.Content>
			</EmptyState.Root>
		</HStack>
	);
};

export default EmptyGamesState;
