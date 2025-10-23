"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme";
import {
	ColorModeProvider,
	type ColorModeProviderProps,
} from "@/components/ui/color-mode";

const ChakraClientProvider = (props: ColorModeProviderProps) => {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
};
export default ChakraClientProvider;
