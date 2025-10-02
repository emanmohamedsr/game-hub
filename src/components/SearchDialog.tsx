import {
	CloseButton,
	Dialog,
	Input,
	InputGroup,
	Kbd,
	Portal,
	IconButton,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchDialog = () => {
	return (
		<Dialog.Root placement={"top"} motionPreset='slide-in-bottom'>
			<Dialog.Trigger asChild>
				<IconButton
					aria-label='Search database'
					size={{ base: "sm", sm: "xl" }}
					colorPalette={"gray"}
					variant='ghost'>
					<LuSearch />
				</IconButton>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop backdropBlur={"md"} />
				<Dialog.Positioner>
					<Dialog.Content rounded={"md"}>
						<Dialog.Header my={6}>
							<InputGroup
								rounded={"md"}
								autoFocus
								flex='1'
								startElement={<LuSearch />}
								endElement={<Kbd>⌘K</Kbd>}>
								<Input placeholder='Search...' />
							</InputGroup>
						</Dialog.Header>
						<Dialog.Body></Dialog.Body>
						<Dialog.CloseTrigger asChild>
							<CloseButton size='sm' />
						</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
};

export default SearchDialog;
