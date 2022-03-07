import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import SectionTitle from "./common/section-title"

const LatestPosts = props => {
  const lposts = props.lposts.selectPosts
  return (
    <div className="bg-gray-200 py-5">
      <div className="container mx-auto">
        <SectionTitle
          title="Our Latest Project"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="md:flex md:flex-row md:flex-wrap -m-4">
          {lposts.map(lpost => {
            const image = getImage(lpost.featuredImage?.node?.localFile)
            return (
              <div key={lpost.id} className="w-full md:w-4/12 p-4">
                {image ? (
                  <GatsbyImage class="mb-3" image={image} alt={lpost.title} />
                ) : (
                  <StaticImage
                    class="mb-3"
                    src="../../static/images/placeholder.png"
                    alt={lpost.title}
                  />
                )}
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
