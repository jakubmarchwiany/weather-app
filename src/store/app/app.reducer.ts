import { PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./app.slice";
import { ThemeMode } from "./models/themeMode.enum";

export function setThemeModeReducer(
	state: AppState,
	action: PayloadAction<{ themeMode: ThemeMode }>
): void {
	const { themeMode } = action.payload;

	state.themeMode = themeMode;
}
