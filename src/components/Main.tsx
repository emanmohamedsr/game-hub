import usePlatforms from "@/hooks/usePlatforms";
import type { IGameQuery, IPlatform, ISortingOption } from "@/interfaces";
import { HStack, VStack } from "@chakra-ui/react";
import BreadcrumbOrder from "./BreadcrumbOrder";
import { sortingOptions } from "./constants";
import GamesList from "./GamesList";
import SelectMenu from "./ui/SelectMenu";
import useGenres from "@/hooks/useGenres";

interface IProps {
	setGameQuery: (query: IGameQuery) => void;
	gameQuery?: IGameQuery;
}

const Main = ({ gameQuery, setGameQuery }: IProps) => {
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
		if (name === "Games")
			setGameQuery({ ...gameQuery, genreId: undefined, search: undefined });
		else if (
			name === selectedGenre?.name &&
			index !== breadcrumbOrder.length - 1
		)
			setGameQuery({ ...gameQuery, search: undefined });
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
						setGameQuery({
							...gameQuery,
							platformId: platform?.id === -1 ? undefined : platform?.id,
						})
					}
					title='Select Platform'
				/>
				<SelectMenu<ISortingOption>
					isLoading={isLoading}
					items={sortingOptions}
					onSelectItem={(sort) =>
						setGameQuery({
							...gameQuery,
							sortVal: sort?.name === "All" ? undefined : sort?.value,
						})
					}
					title='Select Sorting'
				/>
			</HStack>
			<GamesList gameQuery={gameQuery} />
		</VStack>
	);
};

export default Main;
