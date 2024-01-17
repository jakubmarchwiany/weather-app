import { useFocusEffect } from "@react-navigation/native";
import { Search } from "@tamagui/lucide-icons";
import { Formik, FormikProps } from "formik";
import React, { useCallback, useRef } from "react";
import { Keyboard } from "react-native";
import { Button, Input, Text, YStack } from "tamagui";
import { object, string } from "yup";

import { getWeatherForCity } from "../../../store/app/app.action";
import { useAppDispatch } from "../../../store/hooks";

const SEARCH_CITY_FORM_STATE = {
	text: ""
};

const SEARCH_CITY_VALIDATION = object().shape({
	text: string().required().min(2).max(20)
});

export function SearchCity(): JSX.Element {
	const formikRef = useRef<FormikProps<{ text: string }>>();

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
				dispatch(getWeatherForCity(values.text));

				form.resetForm();

				Keyboard.dismiss();
			}}
			validationSchema={SEARCH_CITY_VALIDATION}
		>
			{({ dirty, errors, handleBlur, handleChange, handleSubmit, isValid, values }) => (
				<YStack marginTop="$2" space="$1.5">
					<Input
						backgroundColor="$blue4"
						onBlur={handleBlur("text")}
						onChangeText={handleChange("text")}
						placeholder="Wroclaw"
						value={values.text}
						width="100%"
					/>
					{errors.text && dirty && <Text color="$red11">{errors.text}</Text>}

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
