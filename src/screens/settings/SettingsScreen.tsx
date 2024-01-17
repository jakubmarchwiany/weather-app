import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { H1, YStack } from "tamagui";

import { ToggleThemeMode } from "./components/ToggleThemeMode";

export function SettingsScreen(): JSX.Element {
	return (
		<TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
			<YStack flex={1} padding="$5" paddingBottom="$3">
				<H1 textAlign="center">Settings</H1>

				<ToggleThemeMode />
			</YStack>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",

		paddingHorizontal: 25,
		// borderRadius: 8,
		paddingVertical: 45,
		width: "100%"
		// marginVertical: 10
	},
	heading: {
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 13
	}
});
