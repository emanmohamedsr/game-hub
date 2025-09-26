import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "../ui/color-mode";

const NavBar = () => {
	return (
		<HStack justifyContent={"space-between"} px={4} py={2}>
			<HStack>
				<Image src={logo} alt='logo' w={"60px"} />
				<Text fontSize={"2xl"} fontWeight={"bold"}>
					GameHub
				</Text>
			</HStack>
			<ColorModeButton />
		</HStack>
	);
};

export default NavBar;
