/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { StrictMode } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { persistor, store } from "./store";

export default function Main(): JSX.Element | null {
	const [fontsLoaded, fontError] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<StrictMode>
			<ReduxStore store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<SafeAreaProvider>
						<App />
					</SafeAreaProvider>
				</PersistGate>
			</ReduxStore>
		</StrictMode>
	);
}

registerRootComponent(Main);
