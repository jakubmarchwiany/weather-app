/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */

const API_URL = process.env.API_URL;

type FetchMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

export async function myFetch<T>(
	url: string,
	options: {
		body?: BodyInit | FormData | null;
		customError?: boolean;
		headers?: { "Content-Type": "application/json" };
		method: FetchMethod;
	}
): Promise<T> {
	return await new Promise((resolve, reject) => {
		fetch(API_URL + url, {
			body: options.body,
			credentials: "include",
			headers: options.headers,
			method: options.method
		})
			.then(async (response) => {
				const data = (await response.json()) as T;

				if (response.ok) {
					resolve(data);
				} else {
					// if (response.status === 401) {
					// 	await authorizationFail();
					// }

					if (options.customError !== undefined) {
						reject(data);
					}
				}
			})
			.catch((error) => {
				if (options.customError !== undefined) {
					reject(error);
				}
			});
	});
}
