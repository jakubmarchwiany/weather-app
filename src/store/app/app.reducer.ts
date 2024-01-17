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
