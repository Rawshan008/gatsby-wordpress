import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/common/layout"

const index = ({ data }) => {
  console.log(data)
  const { title, content, featuredImage } = data.wpPage
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
      <img
        src={featuredImage.node.sourceUrl}
        alt={featuredImage.node.altText}
      />
    </Layout>
  )
}

export default index

export const query = graphql`
  query HomePage {
    wpPage(slug: { eq: "home-page" }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`
