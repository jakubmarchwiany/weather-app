import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { YStack } from "tamagui";

import { SearchCity } from "./components/SearchCity";

export function HomeScreen(): JSX.Element {
	return (
		<TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
			<YStack flex={1} padding="$5" paddingBottom="$3">
				<SearchCity />
			</YStack>
		</TouchableWithoutFeedback>
	);
}
