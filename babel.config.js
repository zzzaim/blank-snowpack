const snowpack = require('./snowpack.config');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['snowpack/assets/babel-plugin.js', { dir: snowpack.installOptions.dest }]
  ]
};
