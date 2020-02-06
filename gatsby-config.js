const info = require(`./utils/info`)
const withDefaults = require(`./utils/default-options`)

module.exports = themeOptions => {
  const options = withDefaults(themeOptions)

  return {
    siteMetadata: themeOptions ? themeOptions.metaData : info.metaData,
    plugins: [
      {
        resolve: `gatsby-theme-kuworking-core`,
        options: options,
      },
    ],
  }
}
