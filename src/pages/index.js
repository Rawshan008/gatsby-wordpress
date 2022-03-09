import { graphql } from "gatsby"
import React from "react"
import ContactForm from "../components/common/gravity-form"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout"
import HomeHero from "../components/hero/home-hero"
import LatestPosts from "../components/latest-posts"
import Head from "../components/common/head"

const index = ({ data }) => {
  const { title, content, featuredImage } = data.wpPage

  return (
    <Layout>
      <Head title="Home" />
      <HomeHero />
      <LatestPosts lposts={data.wpPage.latestPosts} />
      {/* <h1>{title}</h1>
      <GatsbyImage image={featureImage} alt={featuredImage.node.altText} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div> */}

      {/* <ContactForm /> */}
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
      latestPosts {
        selectPosts {
          ... on WpPost {
            id
            title
            slug
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
      }
    }
  }
`
