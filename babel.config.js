module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = [
    '@babel/plugin-transform-template-literals', // Add this line
    ['react-native-worklets-core/plugin'],
    ['react-native-reanimated/plugin']

  ];

  return {
    presets,
    plugins
  };
};
