/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL || `https://stuartt45.sg-host.com/graphql`,
        useACF: true,
        develop: {
          hardCacheData: false,
        },
        includedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
          "/*/*/menus",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-plugin-gravity-forms",
      options: {
        url:
          process.env.WPGRAPHQL_URL || `https://stuartt45.sg-host.com/graphql`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
