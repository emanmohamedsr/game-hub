import { EmptyState, HStack, Icon, VStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { PiGameControllerFill } from "react-icons/pi";

interface Iprops {
	title?: string;
	description?: string;
	icon?: IconType;
}

const EmptyGamesState = ({
	title = "There are no games here",
	description = "Explore our vast collection",
	icon = PiGameControllerFill,
}: Iprops) => {
	return (
		<HStack justifyContent='center' alignItems={"center"} w={"100%"}>
			<EmptyState.Root size={{ base: "sm", md: "md", lg: "lg" }}>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<Icon as={icon} />
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
