import type { IPlatform } from "@/interfaces";
import {
	createListCollection,
	HStack,
	Portal,
	Select,
	Spinner,
	Text,
} from "@chakra-ui/react";

interface Iprops {
	isLoading?: boolean;
	title: string;
	items: IPlatform[];
	onSelectPlatform: (platform: IPlatform | null) => void;
}

const SelectMenu = ({ title, items, isLoading, onSelectPlatform }: Iprops) => {
	const newItems = [{ id: 0, name: "All", slug: "all" }, ...items];
	const collection = createListCollection({
		items: newItems.map((platform) => platform.name),
	});

	return (
		<Select.Root
			onValueChange={(details) => {
				const platform = newItems.find(
					(p) => p.name.toLowerCase() === details.items[0].toLowerCase(),
				);
				onSelectPlatform(platform?.slug === "all" ? null : platform || null);
			}}
			closeOnSelect
			lazyMount
			colorPalette={"pink"}
			disabled={isLoading}
			collection={collection}
			size='sm'
			maxWidth='320px'>
			<Select.HiddenSelect />
			<Select.Label>{title}</Select.Label>
			<Select.Control>
				<Select.Trigger>
					{isLoading ? (
						<HStack>
							<Spinner size='xs' />
							<Text>Loading...</Text>
						</HStack>
					) : (
						<Select.ValueText placeholder={title} />
					)}
				</Select.Trigger>
				<Select.IndicatorGroup>
					<Select.Indicator />
				</Select.IndicatorGroup>
			</Select.Control>
			<Portal>
				<Select.Positioner>
					<Select.Content>
						{newItems.map((item) => (
							<Select.Item item={item.name} key={item.id}>
								{item.name}
								<Select.ItemIndicator />
							</Select.Item>
						))}
					</Select.Content>
				</Select.Positioner>
			</Portal>
		</Select.Root>
	);
};

export default SelectMenu;
