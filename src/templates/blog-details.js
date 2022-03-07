import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetails = props => {
  console.log(props)
  const { title, content, featuredImage } = props.data.wpPost
  const featureImage = getImage(featuredImage?.node?.localFile)
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="w-full w-9/12 ml-auto mr-auto">
          {featureImage && (
            <GatsbyImage class="mb-5" image={featureImage} alt={title} />
          )}
          <h1 className="font-bold text-2xl mb-5">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query blog($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
