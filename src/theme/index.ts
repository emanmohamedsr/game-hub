import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	globalCss: {
		"html, body": {
			margin: 0,
			padding: 0,
			boxSizing: "border-box",
			fontFamily: "body",
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
				primary: {
					DEFAULT: { value: "#0FEE0F" },
					_dark: { value: "#f1f7f1ff" },
					_light: { value: "#0FEE0F" },
					100: { value: "#203f20ff" },
					200: { value: "#255625ff" },
					300: { value: "#165316ff" },
				},
			},
			fonts: {
				body: { value: "system-ui, sans-serif" },
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
