import { CloseButton, Drawer, Portal } from "@chakra-ui/react";
import type { ReactNode } from "react";
import GenresList from "./GenresList";

interface IProps {
	children: ReactNode;
	setSelectedGenreId: (genreId?: number) => void;
	selectedGenreId?: number;
}

const GenreListDrawer = ({
	children,
	setSelectedGenreId,
	selectedGenreId,
}: IProps) => {
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
							<GenresList
								setSelectedGenreId={setSelectedGenreId}
								selectedGenreId={selectedGenreId}
							/>
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
