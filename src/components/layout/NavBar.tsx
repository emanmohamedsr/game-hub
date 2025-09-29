import { Box, HStack, IconButton, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import GenreListDrawer from "../GenreListDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import type { IGenre } from "@/interfaces";

interface IProps {
	setSelectedGenre: (genre: IGenre | null) => void;
}

const NavBar = ({ setSelectedGenre }: IProps) => {
	return (
		<HStack justifyContent={"space-between"} px={4} py={2}>
			<HStack>
				<Image src={logo} alt='logo' w={"60px"} />
				<Box display={{ base: "block", lg: "none" }}>
					<GenreListDrawer setSelectedGenre={setSelectedGenre}>
						<IconButton
							py={"22px"}
							px={"12px"}
							borderRadius={10}
							aria-label='open genre list'
							colorPalette={"gray"}
							variant='outline'>
							<GiHamburgerMenu />
						</IconButton>
					</GenreListDrawer>
				</Box>
			</HStack>
			<ColorModeButton />
		</HStack>
	);
};

export default NavBar;
