import React from "react";
import { Button } from "tamagui";

import { appActions } from "../../../store/app/app.slice";
import { useAppDispatch } from "../../../store/hooks";

export function CleanAllData(): JSX.Element {
	const dispatch = useAppDispatch();

	return (
		<Button
			backgroundColor="$red9"
			margin="$5"
			onPress={() => dispatch(appActions.deleteAllDate())}
		>
			delete all data
		</Button>
	);
}
