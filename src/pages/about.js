import { graphql } from "gatsby"
import React from "react"
import Head from "../components/common/head"
import Layout from "../components/common/layout"

const About = ({ data }) => {
  console.log(data)
  const { title, description, buttonLink } = data.wpPage.aboutUs
  return (
    <Layout>
      <Head title="About" />
      <div className="bg-gradient-to-t from-purple-500 to-pink-500 h-screen flex justify-center items-center">
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
    </Layout>
  )
}

export default About

export const query = graphql`
  query AboutUs {
    wpPage(slug: { eq: "about-us" }) {
      title
      aboutUs {
        buttonLink
        description
        fieldGroupName
        title
      }
    }
  }
`
