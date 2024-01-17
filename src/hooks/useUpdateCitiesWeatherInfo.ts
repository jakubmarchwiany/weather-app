import { useEffect } from "react";

import { updateCityWeatherInfo } from "../store/app/app.action";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function useUpdateCitiesWeatherInfo(): void {
	const dispatch = useAppDispatch();
	const citiesWeatherInfo = useAppSelector((s) => s.app.citiesWeatherInfo);

	useEffect(() => {
		const favoriteCitiesWeatherInfo = [...citiesWeatherInfo].filter((c) => c.favorite);

		favoriteCitiesWeatherInfo.map((favoriteCity) => {
			dispatch(updateCityWeatherInfo(favoriteCity));
		});
	}, []);
}
