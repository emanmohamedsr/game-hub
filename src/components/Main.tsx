import type { IGenre, IPlatform, ISortingOption } from "@/interfaces";
import { HStack, VStack } from "@chakra-ui/react";
import SelectMenu from "./ui/SelectMenu";
import GamesList from "./GamesList";
import usePlatforms from "@/hooks/usePlatforms";
import { useState } from "react";
import { sortingOptions } from "./constants";

interface IProps {
	selectedGenre: IGenre | null;
}

const Main = ({ selectedGenre }: IProps) => {
	const { data: platforms, isLoading, error } = usePlatforms();
	const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
		null,
	);
	const [selectedSort, setSelectedSort] = useState<ISortingOption | null>(null);

	return (
		<VStack w={"100%"} alignItems='flex-start' gap={4}>
			<HStack gap={4} flexWrap='wrap' w='100%'>
				<SelectMenu<IPlatform>
					isLoading={isLoading}
					items={error ? [] : platforms ? platforms : []}
					onSelectItem={setSelectedPlatform}
					title='Select Platform'
				/>
				<SelectMenu<ISortingOption>
					isLoading={isLoading}
					items={sortingOptions}
					onSelectItem={setSelectedSort}
					title='Select Sorting'
				/>
			</HStack>
			<GamesList
				selectedPlatform={selectedPlatform}
				selectedGenre={selectedGenre}
				selectedSort={selectedSort}
			/>
		</VStack>
	);
};

export default Main;
