import { Alert } from "react-native";

import { AppThunk } from "..";
import { myFetch } from "../../utilities/myFetch";
import { appActions } from "./app.slice";
import { Weather } from "./models/weather.type";

type WeatherApiData = {
	condition: string;
	humidity: number;
	temperature: number;
	windSpeed: number;
};

export const getWeatherForCity =
	(cityName: string): AppThunk =>
	(appDispatch: (arg0: unknown) => void) => {
		myFetch<WeatherApiData>("/weather", {
			body: JSON.stringify({ cityName }),
			customError: true,
			method: "POST"
		})
			.then((weatherInfo) => {
				const fullWeather = {
					...weatherInfo,
					cityName,
					favorite: false
				} as Weather;

				appDispatch(appActions.addWeather({ weather: fullWeather }));
			})
			.catch((e) => {
				Alert.alert("Error", "Failed to download the weather", [
					{
						style: "cancel",
						text: "Cancel"
					},
					{
						onPress: (): void => {
							appDispatch(getWeatherForCity(cityName));
						},
						style: "default",
						text: "Try again"
					}
				]);
			});
	};
