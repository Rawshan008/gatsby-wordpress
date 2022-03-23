import { graphql } from "gatsby"
import Seo from "gatsby-plugin-wpgraphql-seo"
import React from "react"
import Head from "../components/common/head"
import Layout from "../components/common/layout"

const About = ({ data }) => {
  const { title, content, seo } = data.wpPage
  const { description, buttonLink } = data.wpPage.aboutUs

  console.log(data.wpPage)
  return (
    <Layout>
      <Head title="About" />
      <Seo post={data.wpPage} />
      <div className="bg-gradient-to-t from-purple-500 to-pink-500 flex justify-center items-center py-10">
        <div className="container mx-auto">
          <div className="w-full md:w-6/12 ml-auto mr-auto text-center">
            <h1 className="text-center text-[30px] font-bold text-white mb-2 uppercase">
              {title}
            </h1>
            <p className="text-white mb-5">{description}</p>
            <a
              className="py-2 px-5 text-sm bg-white inline-block rounded hover:bg-bg-header hover:text-white uppercase"
              href={buttonLink}
            >
              Our Blog
            </a>
          </div>
        </div>
      </div>
      <div className="feature-image"></div>
      <div className="container mx-auto py-10">
        <div className="w-full">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query AboutUs {
    wpPage(slug: { eq: "about-us" }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      aboutUs {
        buttonLink
        description
        fieldGroupName
        title
      }
      seo {
        ...SiteMeta
      }
    }
  }
`
