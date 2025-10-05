import { useColorMode } from "@/hooks/useColorMode";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";

interface Iprops {
	rating: number | null;
}

const GameStars = ({ rating }: Iprops) => {
	const { colorMode } = useColorMode();
	const fullStars = rating ? Math.floor(rating || 0) : 0;
	const halfStar = rating && rating % 1 >= 0.5 ? 1 : 0;
	const emptyStars = 5 - fullStars - halfStar;
	const renderStars = (length: number, icon: IconType) =>
		Array.from({ length }).map((_, index) => (
			<Icon
				key={index}
				color={colorMode === "dark" ? "purple.300" : "purple.500"}
				as={icon}
			/>
		));
	return (
		<HStack>
			{renderStars(fullStars, FaStar)}
			{renderStars(halfStar, FaStarHalfAlt)}
			{renderStars(emptyStars, HiOutlineStar)}
		</HStack>
	);
};

export default GameStars;
