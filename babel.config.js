module.exports = function (api) {
	api.cache(true);
	return {
		plugins: ["transform-inline-environment-variables"],
		presets: ["babel-preset-expo"]
	};
};
