import { createSlice } from "@reduxjs/toolkit";

import { addWeatherReducer, setThemeModeReducer } from "./app.reducer";
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

		setThemeMode: setThemeModeReducer
	}
});

const appActions = appSlice.actions;
const appSliceReducers = appSlice.reducer;

export { appActions, appSliceReducers };
