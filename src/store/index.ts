import storage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { UnknownAction, combineReducers } from "redux";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from "redux-persist";
import { ThunkAction } from "redux-thunk";

import { appSliceReducers } from "./app/app.slice";

const persistConfig = {
	key: "root",
	storage
};

const reducers = combineReducers({
	app: appSliceReducers
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}),
	reducer: persistedReducer
});
const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, undefined, UnknownAction>;

export { persistor, store };
export type { AppDispatch, AppThunk, RootState };
