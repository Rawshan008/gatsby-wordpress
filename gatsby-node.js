const path = require(`path`)
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
}
