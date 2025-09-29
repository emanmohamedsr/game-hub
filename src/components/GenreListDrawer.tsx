import { CloseButton, Drawer, Portal } from "@chakra-ui/react";
import type { ReactNode } from "react";
import GenresList from "./GenresList";
import type { IGenre } from "@/interfaces";

interface IProps {
	children: ReactNode;
	setSelectedGenre: (genre: IGenre | null) => void;
}

const GenreListDrawer = ({ children, setSelectedGenre }: IProps) => {
	return (
		<Drawer.Root placement={"start"}>
			<Drawer.Trigger asChild>{children}</Drawer.Trigger>
			<Portal>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.Header>
							<Drawer.Title>Genres List</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body>
							<GenresList setSelectedGenre={setSelectedGenre} />
						</Drawer.Body>
						<Drawer.CloseTrigger asChild>
							<CloseButton size='sm' />
						</Drawer.CloseTrigger>
					</Drawer.Content>
				</Drawer.Positioner>
			</Portal>
		</Drawer.Root>
	);
};

export default GenreListDrawer;
