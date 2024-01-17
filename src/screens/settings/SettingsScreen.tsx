import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { H1, YStack } from "tamagui";

import { CleanAllData } from "./components/DeleteAllData";
import { ToggleThemeMode } from "./components/ToggleThemeMode";

export function SettingsScreen(): JSX.Element {
	return (
		<TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
			<YStack flex={1} padding="$5" paddingBottom="$3">
				<H1 textAlign="center">Settings</H1>

				<ToggleThemeMode />

				<CleanAllData />
			</YStack>
		</TouchableWithoutFeedback>
	);
}
