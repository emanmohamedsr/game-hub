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
	const collection = createListCollection({
		items: items.map((platform) => platform.name),
	});

	return (
		<Select.Root
			onValueChange={(details) => {
				const platform = items.find(
					(p) => p.name.toLowerCase() === details.items[0].toLowerCase(),
				);
				console.log(details, platform);
				onSelectPlatform(platform || null);
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
