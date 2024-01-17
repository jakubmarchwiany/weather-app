/* eslint-disable sort-keys-fix/sort-keys-fix */
import { createSlice } from "@reduxjs/toolkit";

import {
	addCityWeatherInfoReducer,
	deleteAllDateReducer,
	deleteNoFavoriteCitiesReducer,
	setFavoriteCityReducer,
	setThemeModeReducer,
	updateCityWeatherInfoReducer
} from "./app.reducer";
import { ThemeMode } from "./models/themeMode.enum";
import { CityWeatherInfo } from "./models/weather.type";

export type AppState = {
	citiesWeatherInfo: CityWeatherInfo[];
	themeMode: ThemeMode;
};

const initialState: AppState = {
	citiesWeatherInfo: [],
	themeMode: ThemeMode.LIGHT
};

const appSlice = createSlice({
	initialState,
	name: "app",
	reducers: {
		setThemeMode: setThemeModeReducer,
		deleteAllDate: deleteAllDateReducer,

		addCityWeatherInfo: addCityWeatherInfoReducer,
		updateCityWeatherInfo: updateCityWeatherInfoReducer,
		setFavoriteCity: setFavoriteCityReducer,
		deleteNoFavoriteCities: deleteNoFavoriteCitiesReducer
	}
});

const appActions = appSlice.actions;
const appSliceReducers = appSlice.reducer;

export { appActions, appSliceReducers };
