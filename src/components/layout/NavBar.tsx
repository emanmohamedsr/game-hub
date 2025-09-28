import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "../ui/color-mode";

const NavBar = () => {
	return (
		<HStack justifyContent={"space-between"} px={4} py={2}>
			<HStack>
				<Image src={logo} alt='logo' w={"60px"} />
			</HStack>
			<ColorModeButton />
		</HStack>
	);
};

export default NavBar;
