import { DefaultTheme } from "@react-navigation/native";
import { blue, blueDark } from "@tamagui/colors";
import { createSoftenMask, createThemeBuilder } from "@tamagui/theme-builder";

const convertToPalettes = (props: Record<string, string>): string[] =>
	Object.entries(props).map(([k, v]) => v);

const themesBuilder = createThemeBuilder()
	.addPalettes({
		dark: convertToPalettes(blueDark),

		light: convertToPalettes(blue)
	})

	.addTemplates({
		base: {
			active: 6,
			background: 5,
			border: 7,
			color: 0
		}
	})

	.addMasks({
		soften: createSoftenMask()
	})

	.addThemes({
		dark: {
			palette: "dark",

			template: "base"
		},

		light: {
			palette: "light",

			template: "base"
		}
	});

// .addChildThemes({
// 	subtle: {
// 		mask: "soften"
// 	}
// });

export const myThemes = themesBuilder.build();

export const navigationTheme = (backgroundColor: string): typeof DefaultTheme => {
	return {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: backgroundColor
		}
	};
};

export const addShadow = {
	shadowColor: "#171717",
	shadowOffset: { height: 4, width: -2 },
	shadowOpacity: 0.2,
	shadowRadius: 10
};
