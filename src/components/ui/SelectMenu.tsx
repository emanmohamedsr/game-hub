import {
	createListCollection,
	HStack,
	Portal,
	Select,
	Spinner,
	Text,
} from "@chakra-ui/react";

interface INamed {
	name: string;
}

interface Iprops<T extends INamed | string> {
	isLoading?: boolean;
	title: string;
	items: T[];
	onSelectItem: (item: T | null) => void;
	getLabel?: (item: T) => string;
	getKey?: (item: T) => string;
}

const SelectMenu = <T extends INamed | string>({
	title,
	items,
	isLoading,
	onSelectItem,
	getLabel = (item) => (typeof item === "string" ? item : item.name),
	getKey = (item) => (typeof item === "string" ? item : item.name),
}: Iprops<T>) => {
	const collection = createListCollection({
		items: items.map(getLabel),
	});

	return (
		<Select.Root
			rounded={"lg"}
			onValueChange={(details) => {
				const selectedItem = items.find(
					(i) => getLabel(i).toLowerCase() === details.items[0].toLowerCase(),
				);
				onSelectItem(selectedItem as T | null);
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
						{items.map((item) => (
							<Select.Item item={getLabel(item)} key={getKey(item)}>
								{getLabel(item)}
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
