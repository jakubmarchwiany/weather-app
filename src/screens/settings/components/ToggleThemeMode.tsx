import { Moon, Sun } from "@tamagui/lucide-icons";
import React, { useEffect, useState } from "react";
import { Switch, XStack } from "tamagui";

import { appActions } from "../../../store/app/app.slice";
import { ThemeMode } from "../../../store/app/models/themeMode.enum";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export function ToggleThemeMode(): JSX.Element {
	const [isLightMode, setIsLightMode] = useState<boolean>(false);

	const themeMode = useAppSelector((s) => s.app.themeMode);
	const dispatch = useAppDispatch();

	useEffect(() => {
		setIsLightMode(() => themeMode == ThemeMode.DARK);
	}, [themeMode]);

	const handleThemeChange = (isChecked: boolean): void => {
		const selectedThemeMode = isChecked ? ThemeMode.DARK : ThemeMode.LIGHT;

		dispatch(appActions.setThemeMode({ themeMode: selectedThemeMode }));
	};

	return (
		<XStack alignItems="center" justifyContent="center" marginTop="$4" space="$2">
			<Sun size="$2" />
			<Switch
				backgroundColor="$blue7"
				borderColor="$blue8"
				checked={isLightMode}
				onCheckedChange={handleThemeChange}
				size="$5"
			>
				<Switch.Thumb animation="bouncy" />
			</Switch>
			<Moon size="$2" />
		</XStack>
	);
}
