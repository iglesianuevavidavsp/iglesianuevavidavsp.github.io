module.exports = {
  siteMetadata: {
    title: `Una señal para la familia`,
    description: `Programa de radio de la Iglesia Evangélica Bautista "Nueva Vida"`,
    author: `@carlos`,
    radioStreamUrl: `https://freeus3.listen2myradio.com/live.mp3?typeportmount=s1_18133_stream`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radio Nueva Vida`,
        short_name: `rnvsp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rnvsp-small-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
