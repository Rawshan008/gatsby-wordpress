import React from "react"
import { graphql } from "gatsby"

const ProjectDetails = props => {
  console.log(props)
  const { title, content } = props.data.wpPost
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-5">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export default ProjectDetails

export const query = graphql`
  query blog($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`
