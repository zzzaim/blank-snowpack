module.exports = {
  installOptions: {
    dest: 'dist/web_modules',
    optimize: process.env.NODE_ENV == 'production',
    include: 'main/**/*.{js,ts,jsx,tsx}',
    exclude: ['**/test/*.{js,ts}']
  }
};
