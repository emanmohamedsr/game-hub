import type { IPlatform } from "@/interfaces";
import { createListCollection, Portal, Select } from "@chakra-ui/react";

interface Iprops {
	title: string;
	items: IPlatform[];
}

const SelectMenu = ({ title, items }: Iprops) => {
	const collection = createListCollection({ items });
	return (
		<Select.Root collection={collection} size='sm' maxWidth='320px'>
			<Select.HiddenSelect />
			<Select.Label>{title}</Select.Label>
			<Select.Control>
				<Select.Trigger>
					<Select.ValueText placeholder={title} />
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
