/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Alert } from "react-native";

import { AppThunk } from "..";
import { myFetch } from "../../utilities/myFetch";
import { appActions } from "./app.slice";
import { Weather } from "./models/weather.type";

type WeatherApiData = {
	cityName: string;
	condition: string;
	humidity: number;
	temperature: number;
	windSpeed: number;
};

export const getWeatherForCity =
	(cityName: string): AppThunk =>
	(appDispatch: (arg0: unknown) => void) => {
		myFetch<WeatherApiData>("/weather", {
			body: { cityName },
			customError: true,
			method: "POST"
		})
			.then((weatherInfo) => {
				const fullWeather = {
					...weatherInfo,
					favorite: false
				} as Weather;

				appDispatch(appActions.addWeather({ weather: fullWeather }));
			})
			.catch((e) => {
				if (e.statusCode == 404) {
					Alert.alert("Error", e.message, [
						{
							style: "default",
							text: "Ok"
						}
					]);
				} else {
					const errorMessage =
						e.message !== undefined ? e.message : "Failed to download weather";

					Alert.alert("Error", errorMessage, [
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
				}
			});
	};
