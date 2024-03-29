import { Droplet, Heart, RefreshCcw, Wind } from "@tamagui/lucide-icons";
import React from "react";
import { Text, XStack, YStack } from "tamagui";

import { CityWeatherInfo } from "../../../store/app/models/weather.type";

type Props = {
	setFavorite: () => void;
	updateWeatherInfo: () => void;
};

export function WeatherInfoCard({
	cityName,
	condition,
	date,
	favorite,
	humidity,
	id,
	setFavorite,
	temperature,
	updateWeatherInfo,
	windSpeed
}: CityWeatherInfo & Props): JSX.Element {
	return (
		<XStack padding="$1">
			<XStack
				backgroundColor="$blue5"
				borderRadius="$8"
				elevationAndroid={2}
				justifyContent="space-between"
				padding="$3.5"
				width="100%"
			>
				<YStack justifyContent="space-between">
					<YStack>
						<XStack alignItems="center" space="$2">
							<Text fontSize="$7" style={{ fontWeight: "bold" }}>
								{cityName}
							</Text>
							<Heart
								color={favorite ? "$red11" : undefined}
								onPress={setFavorite}
								size="$1"
							/>
							<RefreshCcw onPress={updateWeatherInfo} size="$1" />
						</XStack>
						<Text fontSize="$2">
							{new Date(date).toTimeString().split(" ")[0].slice(0, 5)}
						</Text>
					</YStack>

					<Text fontSize="$4" marginTop="$5">
						{condition}
					</Text>
				</YStack>

				<YStack>
					<Text fontSize="$9" textAlign="center">
						{temperature}°
					</Text>

					<XStack alignItems="center" justifyContent="center">
						<Text fontSize="$5" marginRight="$2">
							{windSpeed} m/s
						</Text>
						<Wind size="$1" />
					</XStack>

					<XStack alignItems="center" justifyContent="center">
						<Text fontSize="$5" marginRight="$2">
							{humidity}%
						</Text>
						<Droplet size="$1" />
					</XStack>
				</YStack>
			</XStack>
		</XStack>
	);
}
