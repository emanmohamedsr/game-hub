import type { IGameQuery, IPlatform, ISortingOption } from "@/interfaces";
import { HStack, VStack } from "@chakra-ui/react";
import SelectMenu from "./ui/SelectMenu";
import GamesList from "./GamesList";
import usePlatforms from "@/hooks/usePlatforms";
import { sortingOptions } from "./constants";
import BreadcrumbOrder from "./BreadcrumbOrder";

interface IProps {
	setGameQuery: (query: IGameQuery) => void;
	gameQuery?: IGameQuery;
}

const Main = ({ gameQuery, setGameQuery }: IProps) => {
	const { data: platforms, isLoading, error } = usePlatforms();

	const breadcrumbOrder = [
		"Games",
		gameQuery?.genre?.name,
		gameQuery?.search,
	].filter(Boolean) as string[];

	const onClickBreadcrumb = (name: string, index: number) => {
		if (name === "Games")
			setGameQuery({ ...gameQuery, genre: null, search: null });
		else if (
			name === gameQuery?.genre?.name &&
			index !== breadcrumbOrder.length - 1
		)
			setGameQuery({ ...gameQuery, search: null });
		else return;
	};

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
							? [{ id: 0, name: "All", slug: "all" }, ...platforms]
							: []
					}
					onSelectItem={(platform) =>
						setGameQuery({
							...gameQuery,
							platform: platform?.name === "All" ? null : platform,
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
							sort: sort?.name === "All" ? null : sort,
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
