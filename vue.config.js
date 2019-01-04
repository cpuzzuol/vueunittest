module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/unit' // asset url prefix in production mode
    : '/', // asset url prefix in development mode
  outputDir: '/Users/cpuzzuol/mampstack/apache2/htdocs/unit', // running 'yarn build' will send production code here
}
