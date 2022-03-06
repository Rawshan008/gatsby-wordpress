import { graphql, Link } from "gatsby"
import React from "react"

const BlogPosts = props => {
  console.log(props)
  const Posts = props.data.allWpPost.edges

  return (
    <div className="simple-blogs">
      <h1>Hello</h1>
      {Posts.map(post => {
        return (
          <Link to={`/blog/${post.node.slug}`} key={post.node.id}>
            <h1>{post.node.title}</h1>
          </Link>
        )
      })}
      <Link to={props.pageContext.previousPagePath}>Previous</Link>
      <Link to={props.pageContext.nextPagePath}>Next</Link>
    </div>
  )
}

export default BlogPosts

export const query = graphql`
  query Post($skip: Int!, $limit: Int!) {
    allWpPost(sort: { fields: title, order: ASC }, skip: $skip, limit: $limit) {
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
