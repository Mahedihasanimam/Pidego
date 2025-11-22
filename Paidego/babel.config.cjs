/** @type {import('@babel/core').ConfigAPI} */
module.exports = function (api) {
  // Cache forever for faster rebuilds
  api.cache.forever();

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // This plugin must be listed last
      "react-native-reanimated/plugin",
    ],
  };
};
