import { Container, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";

const NavBar = () => {
	return (
		<Container>
			<HStack>
				<Image src={logo} alt='logo' w={"60px"} />
				<Text fontSize={"2xl"} fontWeight={"bold"}>
					GameHub
				</Text>
			</HStack>
		</Container>
	);
};

export default NavBar;
