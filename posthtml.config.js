const app = require('./app.config');

module.exports = {
  input: 'main/*.html',
  output: 'dist',
  plugins: {
    'posthtml-head-elements': {
      headElements: app.head,
      headElementsTag: 'posthtml-head'
    },
    'posthtml-expressions': {
      locals: app
    },
    htmlnano: true
  }
};
