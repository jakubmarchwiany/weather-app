import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { H1, YStack } from "tamagui";

import { SearchCity } from "./components/SearchCity";
import { WeathersScrollView } from "./components/WeathersScrollView";

export function HomeScreen(): JSX.Element {
	return (
		<TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
			<YStack flex={1} padding="$5" paddingBottom="$3">
				<H1>Weather</H1>

				<SearchCity />

				<WeathersScrollView />
			</YStack>
		</TouchableWithoutFeedback>
	);
}
