import React from "react";
import { ScrollView, View } from "tamagui";

import { useAppSelector } from "../../../store/hooks";
import { WeatherCard } from "./WeatherCard";

export function WeathersScrollView(): JSX.Element {
	const weathers = useAppSelector((s) => s.app.weathers);

	return (
		<View flex={1}>
			<ScrollView marginTop="$3" space="$2.5">
				{weathers.map((weather) => (
					<WeatherCard {...weather} />
				))}
			</ScrollView>
		</View>
	);
}
