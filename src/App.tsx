import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Settings } from "@tamagui/lucide-icons";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TamaguiProvider, Theme, View } from "tamagui";

import tamaguiConfig from "./assets/tamagui.config";
import { myThemes, navigationTheme } from "./assets/theme";
import { useEffectDeleteNoFavoriteCities } from "./hooks/useEffectDeleteNoFavoriteCities";
import { HomeScreen } from "./screens/home/HomeScreen";
import { SettingsScreen } from "./screens/settings/SettingsScreen";
import { ThemeMode } from "./store/app/models/themeMode.enum";
import { useAppSelector } from "./store/hooks";

const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
	const currentThemeMode = useAppSelector((s) => s.app.themeMode);

	const theme = currentThemeMode == ThemeMode.LIGHT ? myThemes.light : myThemes.dark;
	const insets = useSafeAreaInsets();

	useEffectDeleteNoFavoriteCities();

	return (
		<>
			<StatusBar
				backgroundColor={theme.background}
				style={currentThemeMode === ThemeMode.LIGHT ? "dark" : "light"}
			/>

			<TamaguiProvider config={tamaguiConfig}>
				<Theme name={currentThemeMode === ThemeMode.LIGHT ? "light" : "dark"}>
					<View backgroundColor={theme.background} flex={1} paddingTop={insets.top}>
						<NavigationContainer theme={navigationTheme(theme.background)}>
							<Tab.Navigator
								initialRouteName="home"
								screenOptions={{
									headerShown: false,
									tabBarActiveBackgroundColor: theme.active,
									tabBarInactiveBackgroundColor: theme.background,
									tabBarShowLabel: false,
									tabBarStyle: { backgroundColor: theme.background }
								}}
							>
								<Tab.Screen
									component={HomeScreen}
									name="home"
									options={{
										tabBarIcon: () => <Home size="$1.5" />
									}}
								/>
								<Tab.Screen
									component={SettingsScreen}
									name="settings"
									options={{
										tabBarIcon: () => <Settings size="$1.5" />
									}}
								/>
							</Tab.Navigator>
						</NavigationContainer>
					</View>
				</Theme>
			</TamaguiProvider>
		</>
	);
}
