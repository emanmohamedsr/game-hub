import type { IGameQuery, IPlatform, ISortingOption } from "@/interfaces";
import { HStack, VStack } from "@chakra-ui/react";
import SelectMenu from "./ui/SelectMenu";
import GamesList from "./GamesList";
import usePlatforms from "@/hooks/usePlatforms";
import { sortingOptions } from "./constants";

interface IProps {
	gameQuery?: IGameQuery;
	onSelectPlatform: (platform: IPlatform | null) => void;
	onSelectSort: (sort: ISortingOption | null) => void;
}

const Main = ({ gameQuery, onSelectPlatform, onSelectSort }: IProps) => {
	const { data: platforms, isLoading, error } = usePlatforms();

	return (
		<VStack w={"100%"} alignItems='flex-start' gap={4}>
			<HStack gap={4} flexWrap='wrap' w='100%'>
				<SelectMenu<IPlatform>
					isLoading={isLoading}
					items={error ? [] : platforms ? platforms : []}
					onSelectItem={onSelectPlatform}
					title='Select Platform'
				/>
				<SelectMenu<ISortingOption>
					isLoading={isLoading}
					items={sortingOptions}
					onSelectItem={onSelectSort}
					title='Select Sorting'
				/>
			</HStack>
			<GamesList gameQuery={gameQuery} />
		</VStack>
	);
};

export default Main;
