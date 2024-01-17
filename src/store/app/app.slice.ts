import { createSlice } from "@reduxjs/toolkit";

import {
	addCityWeatherInfoReducer,
	deleteAllDateReducer,
	deleteNoFavoriteCitiesReducer,
	setFavoriteCityReducer,
	setThemeModeReducer
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
		addCityWeatherInfo: addCityWeatherInfoReducer,
		deleteAllDate: deleteAllDateReducer,

		deleteNoFavoriteCities: deleteNoFavoriteCitiesReducer,
		setFavoriteCity: setFavoriteCityReducer,
		setThemeMode: setThemeModeReducer
	}
});

const appActions = appSlice.actions;
const appSliceReducers = appSlice.reducer;

export { appActions, appSliceReducers };
