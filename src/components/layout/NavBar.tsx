import { Box, HStack, IconButton, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import GenreListDrawer from "../GenreListDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchDialog from "../SearchDialog";

const NavBar = () => {
	return (
		<HStack justifyContent={"space-between"} px={4} py={2}>
			<HStack>
				<Image
					src={logo}
					alt='logo'
					w={{ base: "30px", sm: "60px" }}
					mr={{ base: -2, sm: 0 }}
				/>
				<Box display={{ base: "block", lg: "none" }} mr={{ base: -2, sm: 0 }}>
					<GenreListDrawer>
						<IconButton
							size={{ base: "sm", sm: "xl" }}
							aria-label='open genre list'
							colorPalette={"gray"}
							variant='ghost'>
							<GiHamburgerMenu />
						</IconButton>
					</GenreListDrawer>
				</Box>
				<SearchDialog />
			</HStack>
			<ColorModeButton />
		</HStack>
	);
};

export default NavBar;
