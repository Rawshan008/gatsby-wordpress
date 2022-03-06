import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const HomeHero = () => {
  const heroHome = useStaticQuery(graphql`
    query HomeHero {
      wpPage(isFrontPage: { eq: true }) {
        homeHero {
          title
          description
          buttonText
          buttonLink
        }
      }
    }
  `)
  const { title, description, buttonText, buttonLink } =
    heroHome.wpPage.homeHero

  return (
    <div className="bg-gradient-to-t from-purple-500 to-pink-500 h-96 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="w-6/12 ml-auto mr-auto text-center">
          <h1 className="text-center text-[30px] font-bold text-white mb-2 uppercase">
            {title}
          </h1>
          <p className="text-white mb-5">{description}</p>
          <a
            className="py-2 px-5 text-sm bg-white inline-block rounded hover:bg-bg-header hover:text-white uppercase"
            href={buttonLink}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
