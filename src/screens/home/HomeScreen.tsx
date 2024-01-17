import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { H1, YStack } from "tamagui";

import { SearchCity } from "./components/SearchCity";
import { WeatherInfoList } from "./components/WeatherInfoList";

export function HomeScreen(): JSX.Element {
	return (
		<TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
			<YStack flex={1} padding="$5" paddingBottom="$3">
				<H1>Weather</H1>

				<SearchCity />

				<WeatherInfoList />
			</YStack>
		</TouchableWithoutFeedback>
	);
}
