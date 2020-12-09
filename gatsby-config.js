const path = require(`path`)

module.exports = {
  pathPrefix: '/gatsby-landing',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        rootMargin: '0px 0px -40% 0px',
        threshold: 0.4,
      },
    },
  ],
}
