import type { IPlatform } from "@/interfaces";
import { HStack, Icon } from "@chakra-ui/react";
import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { TbDeviceUnknown } from "react-icons/tb";
import type { IconType } from "react-icons";

interface Iprops {
	platforms: IPlatform[];
}

const GamePlatformList = ({ platforms }: Iprops) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};
	return (
		<HStack alignItems={"start"} gap={2} flexWrap={"wrap"}>
			{platforms.map(
				(platform) =>
					iconMap[platform.slug] && (
						<Icon
							key={platform.id}
							as={iconMap[platform.slug] || TbDeviceUnknown}
							color={"gray.500"}
						/>
					),
			)}
		</HStack>
	);
};

export default GamePlatformList;
