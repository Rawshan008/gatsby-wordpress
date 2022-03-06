import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const LatestPosts = () => {
  const latesPosts = useStaticQuery(graphql`
    query LatestPosts {
      wpPage(isFrontPage: { eq: true }, latestPosts: { fieldGroupName: {} }) {
        latestPosts {
          selectPosts {
            ... on WpPost {
              id
              title
              slug
              featuredImage {
                node {
                  localFile {
                    childrenImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(latesPosts)
  return <div>LatestPosts</div>
}

export default LatestPosts
