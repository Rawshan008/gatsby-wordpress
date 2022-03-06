import { graphql } from "gatsby"
import React from "react"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout"
import HomeHero from "../components/hero/home-hero"
import LatestPosts from "../components/latest-posts"

const index = ({ data }) => {
  const { title, content, featuredImage } = data.wpPage

  console.log(data.wpPage)

  // const featureImage = getImage(featuredImage.node.localFile)
  return (
    <Layout>
      <HomeHero />
      <LatestPosts />
      {/* <h1>{title}</h1>
      <GatsbyImage image={featureImage} alt={featuredImage.node.altText} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
    </Layout>
  )
}

export default index

export const query = graphql`
  query HomePage {
    wpPage(isFrontPage: { eq: true }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
  }
`
