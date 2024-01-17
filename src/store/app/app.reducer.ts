import { PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./app.slice";
import { ThemeMode } from "./models/themeMode.enum";
import { CityWeatherInfo } from "./models/weather.type";

export function setThemeModeReducer(
	state: AppState,
	action: PayloadAction<{ themeMode: ThemeMode }>
): void {
	const { themeMode } = action.payload;

	state.themeMode = themeMode;
}

export function addCityWeatherInfoReducer(
	state: AppState,
	action: PayloadAction<{ cityWeatherInfo: CityWeatherInfo }>
): void {
	const { cityWeatherInfo } = action.payload;

	state.citiesWeatherInfo = [cityWeatherInfo, ...state.citiesWeatherInfo];
}

export function deleteAllDateReducer(state: AppState): void {
	state.citiesWeatherInfo = [];
}

export function setFavoriteCityReducer(
	state: AppState,
	action: PayloadAction<{ favorite: boolean; id: string }>
): AppState {
	const { favorite: favoriteToSet, id: weatherToUpdateId } = action.payload;

	return {
		...state,
		citiesWeatherInfo: state.citiesWeatherInfo.map((w) =>
			w.id === weatherToUpdateId ? { ...w, favorite: favoriteToSet } : w
		)
	};
}

export function deleteNoFavoriteCitiesReducer(state: AppState): AppState {
	return {
		...state,
		citiesWeatherInfo: [...state.citiesWeatherInfo].filter((w) => w.favorite)
	};
}

export function updateCityWeatherInfoReducer(
	state: AppState,
	action: PayloadAction<{ cityWeatherInfo: CityWeatherInfo }>
): AppState {
	const { cityWeatherInfo } = action.payload;

	return {
		...state,
		citiesWeatherInfo: state.citiesWeatherInfo.map((w) =>
			w.id === cityWeatherInfo.id ? { ...cityWeatherInfo } : w
		)
	};
}
