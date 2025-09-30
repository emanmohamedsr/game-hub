import type { IGenre, IPlatform } from "@/interfaces";
import { VStack } from "@chakra-ui/react";
import SelectMenu from "./ui/SelectMenu";
import GamesList from "./GamesList";
import usePlatforms from "@/hooks/usePlatforms";
import { useState } from "react";

interface IProps {
	selectedGenre: IGenre | null;
}

const Main = ({ selectedGenre }: IProps) => {
	const { data: platforms, isLoading, error } = usePlatforms();
	const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(
		null,
	);
	return (
		<VStack w={"100%"} alignItems='flex-start' gap={4}>
			<SelectMenu
				isLoading={isLoading}
				items={error ? [] : platforms ? platforms : []}
				onSelectPlatform={setSelectedPlatform}
				title='Select Platform'
			/>
			<GamesList
				selectedPlatform={selectedPlatform}
				selectedGenre={selectedGenre}
			/>
		</VStack>
	);
};

export default Main;
