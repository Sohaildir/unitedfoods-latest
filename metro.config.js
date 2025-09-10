const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['bin', 'txt', 'jpg', 'png', 'json', 'ttf', 'otf'].filter(
      ext => ext !== 'svg',
    ),
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'svg'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
