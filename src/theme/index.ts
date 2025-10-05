import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	globalCss: {
		"html, body": {
			margin: 0,
			padding: 0,
			boxSizing: "border-box",
			fontFamily: "body",
			bg: "bg",
			color: "text",
			transition: "background-color 0.2s, color 0.2s",
		},
	},
	theme: {
		breakpoints: {
			sm: "320px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		tokens: {
			colors: {
				gray: {
					50: { value: "#f9f9f9" },
					100: { value: "#ededed" },
					200: { value: "#d3d3d3" },
					300: { value: "#b3b3b3" },
					400: { value: "#a0a0a0" },
					500: { value: "#898989" },
					600: { value: "#6c6c6c" },
					700: { value: "#202020" },
					800: { value: "#121212" },
					900: { value: "#111" },
				},
				bg: {
					light: { value: "{colors.gray.50}" },
					dark: { value: "{colors.gray.900}" },
				},
				text: {
					light: { value: "{colors.gray.900}" },
					dark: { value: "{colors.gray.50}" },
				},
			},
			fonts: {
				body: { value: "system-ui, sans-serif" },
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
