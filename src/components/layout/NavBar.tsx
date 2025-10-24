import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchDialog from "../SearchDialog";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<HStack
			flexDirection={{ base: "row-reverse", lg: "row" }}
			justifyContent={"space-between"}
			px={4}
			py={2}>
			<HStack flexDirection={{ base: "row-reverse", lg: "row" }}>
				<Link to={"/"}>
					<Image
						src={logo}
						alt='logo'
						w={{ base: "30px", sm: "60px" }}
						mr={{ base: -2, sm: 0 }}
					/>
				</Link>
				{/* <Link to={"/"}> */}
				<SearchDialog />
				{/* </Link> */}
			</HStack>
			<ColorModeButton />
		</HStack>
	);
};

export default NavBar;
