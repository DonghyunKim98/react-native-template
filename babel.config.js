module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@/root-navigator': './src/screen/root.navigator.tsx',
          '@/atoms': './src/atoms',
          '@/utils': './src/utils',
          '@/layout': './src/layout',
          '@/provider': './src/provider',
          '@/hooks': './src/hooks',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
