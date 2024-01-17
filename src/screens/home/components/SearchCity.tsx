import { useFocusEffect } from "@react-navigation/native";
import { Search } from "@tamagui/lucide-icons";
import { Formik, FormikProps } from "formik";
import React, { useCallback, useRef } from "react";
import { Keyboard } from "react-native";
import { Button, Input, Text, YStack } from "tamagui";
import { object, string } from "yup";

import { getCityWeatherInfo } from "../../../store/app/app.action";
import { useAppDispatch } from "../../../store/hooks";

const SEARCH_CITY_FORM_STATE = {
	cityName: ""
};

const SEARCH_CITY_VALIDATION = object().shape({
	cityName: string().required().min(2).max(20)
});

export function SearchCity(): JSX.Element {
	const formikRef = useRef<FormikProps<{ cityName: string }>>();

	const dispatch = useAppDispatch();

	useFocusEffect(
		useCallback(() => {
			return () => {
				formikRef.current?.resetForm();
			};
		}, [])
	);

	return (
		<Formik
			initialValues={SEARCH_CITY_FORM_STATE}
			innerRef={(p) => p && (formikRef.current = p)}
			onSubmit={(values, form) => {
				dispatch(getCityWeatherInfo(values.cityName));

				form.resetForm();

				Keyboard.dismiss();
			}}
			validationSchema={SEARCH_CITY_VALIDATION}
		>
			{({ dirty, errors, handleBlur, handleChange, handleSubmit, isValid, values }) => (
				<YStack marginTop="$2" space="$1.5">
					<Input
						backgroundColor="$blue4"
						onBlur={handleBlur("cityName")}
						onChangeText={handleChange("cityName")}
						placeholder="Wroclaw"
						value={values.cityName}
						width="100%"
					/>
					{errors.cityName && dirty && <Text color="$red11">{errors.cityName}</Text>}

					<Button
						alignSelf="center"
						backgroundColor="$blue7"
						disabled={!isValid}
						icon={Search}
						onPress={() => handleSubmit()}
						opacity={!isValid ? 0.5 : undefined}
						size="$3"
						width="100%"
					>
						Search
					</Button>
				</YStack>
			)}
		</Formik>
	);
}
