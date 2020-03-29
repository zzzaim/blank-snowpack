const pkg = require('./package.json');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'snowpack/assets/babel-plugin.js',
      { dir: pkg.snowpack.installOptions.dest }
    ]
  ]
};
