import { createSlice } from "@reduxjs/toolkit";

import { setThemeModeReducer } from "./app.reducer";
import { ThemeMode } from "./models/themeMode.enum";

export type AppState = {
	themeMode: ThemeMode;
};

const initialState: AppState = {
	themeMode: ThemeMode.LIGHT
};

const appSlice = createSlice({
	initialState,
	name: "app",
	reducers: {
		setThemeMode: setThemeModeReducer
	}
});

const appActions = appSlice.actions;
const appSliceReducers = appSlice.reducer;

export { appActions, appSliceReducers };
