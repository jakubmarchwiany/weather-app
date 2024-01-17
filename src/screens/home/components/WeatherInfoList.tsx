import React from "react";
import { ScrollView, View } from "tamagui";

import { updateCityWeatherInfo } from "../../../store/app/app.action";
import { appActions } from "../../../store/app/app.slice";
import { CityWeatherInfo } from "../../../store/app/models/weather.type";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { WeatherInfoCard } from "./WeatherInfoCard";

export function WeatherInfoList(): JSX.Element {
	const weathers = useAppSelector((s) => s.app.citiesWeatherInfo);

	const dispatch = useAppDispatch();

	const handleSetFavorite = (id: string, favorite: boolean): void => {
		dispatch(appActions.setFavoriteCity({ favorite, id }));
	};

	const handleUpdateWeatherInfo = (cityWeatherInfo: CityWeatherInfo): void => {
		dispatch(updateCityWeatherInfo(cityWeatherInfo));
	};

	const favoritesCitiesWeather = [...weathers].filter((w) => w.favorite === true);
	const othersCitiesWeather = [...weathers].filter((w) => w.favorite === false);

	return (
		<View flex={1}>
			<ScrollView marginTop="$3" space="$2.5">
				{favoritesCitiesWeather.map((weatherInfo) => (
					<WeatherInfoCard
						key={weatherInfo.id}
						{...weatherInfo}
						setFavorite={() => handleSetFavorite(weatherInfo.id, !weatherInfo.favorite)}
						updateWeatherInfo={() => handleUpdateWeatherInfo(weatherInfo)}
					/>
				))}
				{othersCitiesWeather.map((weatherInfo) => (
					<WeatherInfoCard
						key={weatherInfo.id}
						{...weatherInfo}
						setFavorite={() => handleSetFavorite(weatherInfo.id, !weatherInfo.favorite)}
						updateWeatherInfo={() => handleUpdateWeatherInfo(weatherInfo)}
					/>
				))}
			</ScrollView>
		</View>
	);
}
