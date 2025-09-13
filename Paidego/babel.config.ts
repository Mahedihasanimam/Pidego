import type { ConfigAPI } from '@babel/core';

export default function(api: ConfigAPI) {
  // ✅ Correct usage: Call the .forever() method on the api.cache object
  api.cache.forever();

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // This plugin has to be listed last.
      'react-native-reanimated/plugin',
    ],
  };
};