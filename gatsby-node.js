const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")
exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions
  const { data } = await graphql(`
    query Posts {
      allWpPost {
        edges {
          node {
            slug
            id
            title
          }
        }
      }
    }
  `)

  data.allWpPost.edges.forEach(edge => {
    const slug = edge.node.slug
    slug &&
      createPage({
        path: "/blog/" + slug,
        component: path.resolve(`./src/templates/blog-details.js`),
        context: { slug: slug },
      })
  })

  paginate({
    createPage, // The Gatsby `createPage` function
    items: data.allWpPost.edges, // An array of objects
    itemsPerPage: 6, // How many items you want per page
    pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`./src/templates/blog-list.js`),
  })
}
