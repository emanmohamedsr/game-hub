import type { IGenre } from "@/interfaces";
import { Skeleton, VStack } from "@chakra-ui/react";
import SelectMenu from "./ui/SelectMenu";
import GamesList from "./GamesList";
import usePlatforms from "@/hooks/usePlatforms";

interface IProps {
	selectedGenre: IGenre | null;
}

const Main = ({ selectedGenre }: IProps) => {
	const { data: platforms, isLoading, error } = usePlatforms();
	if (isLoading) {
		return (
			<VStack align={"flex-start"} gap={2} w='100%' pb={4}>
				<Skeleton
					height='20px'
					width={{ base: "100px", md: "150px", lg: "200px" }}
				/>
				<Skeleton
					height='40px'
					width={{ base: "100px", md: "200px", lg: "300px" }}
				/>
			</VStack>
		);
	}
	return (
		<VStack w={"100%"} alignItems='flex-start' gap={4}>
			<SelectMenu
				items={error ? [] : platforms ? platforms : []}
				title='Select Platform'
			/>
			<GamesList selectedGenre={selectedGenre} />
		</VStack>
	);
};

export default Main;
