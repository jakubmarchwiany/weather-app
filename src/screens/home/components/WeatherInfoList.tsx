import React from "react";
import { ScrollView, View } from "tamagui";

import { appActions } from "../../../store/app/app.slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { WeatherInfoCard } from "./WeatherInfoCard";

export function WeatherInfoList(): JSX.Element {
	const weathers = useAppSelector((s) => s.app.citiesWeatherInfo);

	const dispatch = useAppDispatch();

	const handleSetFavorite = (id: string, favorite: boolean): void => {
		dispatch(appActions.setFavoriteCity({ favorite, id }));
	};

	const favoritesCitiesWeather = [...weathers].filter((w) => w.favorite === true);
	const othersCitiesWeather = [...weathers].filter((w) => w.favorite === false);

	return (
		<View flex={1}>
			<ScrollView marginTop="$3" space="$2.5">
				{favoritesCitiesWeather.map((weather) => (
					<WeatherInfoCard
						key={weather.id}
						{...weather}
						setFavorite={handleSetFavorite}
					/>
				))}
				{othersCitiesWeather.map((weather) => (
					<WeatherInfoCard
						key={weather.id}
						{...weather}
						setFavorite={handleSetFavorite}
					/>
				))}
			</ScrollView>
		</View>
	);
}
