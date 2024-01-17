import React from "react";
import { ScrollView, View } from "tamagui";

import { appActions } from "../../../store/app/app.slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { WeatherCard } from "./WeatherCard";

export function WeathersScrollView(): JSX.Element {
	const weathers = useAppSelector((s) => s.app.weathers);

	const dispatch = useAppDispatch();

	const handleSetFavorite = (id: string, favorite: boolean): void => {
		dispatch(appActions.setFavoriteWeather({ favorite, id }));
	};

	return (
		<View flex={1}>
			<ScrollView marginTop="$3" space="$2.5">
				{weathers.map((weather) => (
					<WeatherCard key={weather.id} {...weather} setFavorite={handleSetFavorite} />
				))}
			</ScrollView>
		</View>
	);
}
