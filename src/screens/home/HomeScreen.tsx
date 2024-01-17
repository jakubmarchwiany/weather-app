import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, YStack } from "tamagui";

export function HomeScreen(): JSX.Element {
	return (
		<TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
			<YStack flex={1} padding="$5" paddingBottom="$3"></YStack>
		</TouchableWithoutFeedback>
	);
}
