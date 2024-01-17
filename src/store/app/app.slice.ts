import { createSlice } from "@reduxjs/toolkit";

import {
	addWeatherReducer,
	deleteAllDateReducer,
	deleteNoFavoriteCitiesReducer,
	setFavoriteWeatherReducer,
	setThemeModeReducer
} from "./app.reducer";
import { ThemeMode } from "./models/themeMode.enum";
import { Weather } from "./models/weather.type";

export type AppState = {
	themeMode: ThemeMode;
	weathers: Weather[];
};

const initialState: AppState = {
	themeMode: ThemeMode.LIGHT,
	weathers: []
};

const appSlice = createSlice({
	initialState,
	name: "app",
	reducers: {
		addWeather: addWeatherReducer,
		deleteAllDate: deleteAllDateReducer,

		deleteNoFavoriteCities: deleteNoFavoriteCitiesReducer,
		setFavoriteWeather: setFavoriteWeatherReducer,
		setThemeMode: setThemeModeReducer
	}
});

const appActions = appSlice.actions;
const appSliceReducers = appSlice.reducer;

export { appActions, appSliceReducers };
