import { PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./app.slice";
import { ThemeMode } from "./models/themeMode.enum";
import { Weather } from "./models/weather.type";

export function setThemeModeReducer(
	state: AppState,
	action: PayloadAction<{ themeMode: ThemeMode }>
): void {
	const { themeMode } = action.payload;

	state.themeMode = themeMode;
}

export function addWeatherReducer(
	state: AppState,
	action: PayloadAction<{ weather: Weather }>
): void {
	const weather = action.payload.weather;

	state.weathers = [weather, ...state.weathers];
}

export function deleteAllDateReducer(state: AppState): void {
	state.weathers = [];
}

export function setFavoriteWeatherReducer(
	state: AppState,
	action: PayloadAction<{ favorite: boolean; id: string }>
): AppState {
	const { favorite: favoriteToSet, id: weatherToUpdateId } = action.payload;

	return {
		...state,
		weathers: state.weathers.map((w) =>
			w.id === weatherToUpdateId ? { ...w, favorite: favoriteToSet } : w
		)
	};
}

export function deleteNoFavoriteCitiesReducer(state: AppState): AppState {
	return {
		...state,
		weathers: [...state.weathers].filter((w) => w.favorite)
	};
}
