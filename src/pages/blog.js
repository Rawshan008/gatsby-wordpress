import { graphql, Link } from "gatsby"
import React from "react"

const BlogPosts = ({ props, data }) => {
  const Posts = data.allWpPost.edges

  console.log("postrs", Posts)
  return (
    <div className="simple-blogs">
      <h1>My Blog</h1>
      {Posts.map(post => {
        return (
          <Link to={post.node.slug} key={post.node.id}>
            <h1>{post.node.title}</h1>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogPosts

export const query = graphql`
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
`
