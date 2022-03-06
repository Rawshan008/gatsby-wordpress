import { graphql, useStaticQuery } from "gatsby"
import React from "react"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SectionTitle from "./common/section-title"

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
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `)

  const lposts = latesPosts.wpPage.latestPosts.selectPosts
  return (
    <div className="bg-gray-200 py-5">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Latest Project"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="md:flex md:flex-row gap-3">
          {lposts.map(lpost => {
            return (
              <div key={lpost.id} className="w-full md:w-4/12">
                <img
                  className="mb-5"
                  src={lpost.featuredImage.node.sourceUrl}
                  alt=""
                />
                <h3 className="text-xl font-bold mb-3">{lpost.title}</h3>
                <a
                  className="py-2 px-5 text-sm bg-black text-white inline-block rounded hover:bg-bg-header hover:text-white uppercase"
                  href={`/blog/${lpost.slug}`}
                >
                  Read More
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LatestPosts
