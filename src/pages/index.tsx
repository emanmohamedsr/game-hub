import usePlatforms from "@/hooks/usePlatforms";
import type { IPlatform, ISortingOption } from "@/interfaces";
import { HStack, VStack } from "@chakra-ui/react";
import BreadcrumbOrder from "../components/BreadcrumbOrder";
import { sortingOptions } from "../components/constants";
import GamesList from "../components/GamesList";
import SelectMenu from "../components/ui/SelectMenu";
import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/store";

const GameHub = () => {
	const { gameQuery, setSearchText, setPlatformId, setGenreId, setSortOrder } =
		useGameQueryStore();

	const { data: genres } = useGenres();
	const { data, isLoading, error } = usePlatforms();
	const platforms = data?.results;

	const selectedGenre = genres.results?.find(
		(genre) => genre.id === gameQuery?.genreId,
	);

	// Breadcrumb logic
	const breadcrumbOrder = [
		"Games",
		selectedGenre?.name || undefined,
		gameQuery?.search,
	].filter(Boolean) as string[];

	const onClickBreadcrumb = (name: string, index: number) => {
		if (name === "Games") {
			setGenreId(undefined);
			setSearchText(undefined);
		} else if (
			name === selectedGenre?.name &&
			index !== breadcrumbOrder.length - 1
		)
			setSearchText(undefined);
		else return;
	};
	// End Breadcrumb logic

	return (
		<VStack w={"100%"} alignItems='flex-start' gap={4}>
			<BreadcrumbOrder
				order={breadcrumbOrder}
				onClickBreadcrumb={onClickBreadcrumb}
			/>
			<HStack gap={4} flexWrap='wrap' w='100%'>
				<SelectMenu<IPlatform>
					isLoading={isLoading}
					items={
						error
							? []
							: platforms
							? [{ id: -1, name: "All", slug: "all" }, ...platforms]
							: []
					}
					onSelectItem={(platform) =>
						setPlatformId(platform?.id === -1 ? undefined : platform?.id)
					}
					title='Select Platform'
				/>
				<SelectMenu<ISortingOption>
					isLoading={isLoading}
					items={sortingOptions}
					onSelectItem={(sort) =>
						setSortOrder(sort?.value === "" ? undefined : sort?.value)
					}
					title='Select Sorting'
				/>
			</HStack>
			<GamesList />
		</VStack>
	);
};

export default GameHub;
