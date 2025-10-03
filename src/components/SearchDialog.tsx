import { useColorMode } from "@/hooks/useColorMode";
import {
	CloseButton,
	Dialog,
	Input,
	InputGroup,
	Portal,
	IconButton,
	Button,
} from "@chakra-ui/react";
import { useRef, useState, type FormEvent } from "react";
import { LuSearch } from "react-icons/lu";

interface IProps {
	onSearch: (searchText: string | null) => void;
}

const SearchDialog = ({ onSearch }: IProps) => {
	const [open, setOpen] = useState(false);
	const { colorMode } = useColorMode();
	const ref = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (ref.current) {
			onSearch(ref.current.value || null);
			setOpen(false);
		}
	};

	return (
		<Dialog.Root
			open={open}
			onOpenChange={(e) => setOpen(e.open)}
			placement={"top"}
			motionPreset='slide-in-bottom'>
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
						<form onSubmit={handleFormSubmit}>
							<Dialog.Header
								my={6}
								d={"flex"}
								gap={4}
								flexDir={{ base: "column", sm: "row" }}
								justifyContent={"space-between"}
								alignItems={{ base: "end", sm: "center" }}>
								<InputGroup
									rounded={"md"}
									autoFocus
									flex='1'
									startElement={<LuSearch />}>
									<Input w={"100%"} ref={ref} placeholder='Search...' />
								</InputGroup>
								<Button
									type='submit'
									variant={"solid"}
									bgGradient={
										colorMode === "dark"
											? "linear-gradient(to right, #fbb6ce, #d6bcfa)"
											: "linear-gradient(to right, #97266d, #6b46c1)"
									}>
									Search
								</Button>
							</Dialog.Header>
						</form>
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
