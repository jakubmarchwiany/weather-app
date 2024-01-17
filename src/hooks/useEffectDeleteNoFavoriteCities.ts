import { useEffect } from "react";

import { appActions } from "../store/app/app.slice";
import { useAppDispatch } from "../store/hooks";

export function useEffectDeleteNoFavoriteCities(): void {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(appActions.deleteNoFavoriteCities());
	}, []);
}
