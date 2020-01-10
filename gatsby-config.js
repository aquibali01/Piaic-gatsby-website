/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
          spaceId: "847rv4ceoq7h",
          accessToken : "sHwrKtxNbqFd4Pv1z0XoKWQhvstZOZGKBMf_J32fq04"
      }
    },
    "gatsby-plugin-sass"
  ]
}
