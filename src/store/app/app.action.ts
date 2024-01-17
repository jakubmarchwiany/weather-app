/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Alert } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { AppThunk } from "..";
import { myFetch } from "../../utilities/myFetch";
import { appActions } from "./app.slice";
import { CityWeatherInfo } from "./models/weather.type";

type WeatherApiData = {
	cityName: string;
	condition: string;
	humidity: number;
	temperature: number;
	windSpeed: number;
};

export const getCityWeatherInfo =
	(cityName: string): AppThunk =>
	(appDispatch: (arg0: unknown) => void) => {
		myFetch<WeatherApiData>("/weather", {
			body: { cityName },
			customError: true,
			method: "POST"
		})
			.then((resCityWeatherInfo) => {
				const cityWeatherInfo = {
					...resCityWeatherInfo,
					favorite: false,
					id: uuidv4()
				} as CityWeatherInfo;

				appDispatch(appActions.addCityWeatherInfo({ cityWeatherInfo }));
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
								appDispatch(getCityWeatherInfo(cityName));
							},
							style: "default",
							text: "Try again"
						}
					]);
				}
			});
	};

export const updateCityWeatherInfo =
	(oldCityWeatherInfo: CityWeatherInfo): AppThunk =>
	(appDispatch: (arg0: unknown) => void) => {
		myFetch<WeatherApiData>("/weather", {
			body: { cityName: oldCityWeatherInfo.cityName },
			method: "POST"
		}).then((resCityWeatherInfo) => {
			const cityWeatherInfo = {
				...resCityWeatherInfo,
				favorite: oldCityWeatherInfo.favorite,
				id: oldCityWeatherInfo.id
			} as CityWeatherInfo;

			appDispatch(appActions.updateCityWeatherInfo({ cityWeatherInfo }));
		});
	};
