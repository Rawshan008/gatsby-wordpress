import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GravityFormForm from "gatsby-plugin-gravity-forms"

const ExamplePage = () => {
  const form = useStaticQuery(graphql`
    query formQuery {
      wpGfForm(databaseId: { eq: 1 }) {
        ...GravityFormFields
      }
    }
  `)

  // console.log(data)

  return (
    <GravityFormForm
      data={form}
      presetValues={{ input_2: "My preset value" }}
    />
  )
}

export default ExamplePage
