import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GravityFormForm from "gatsby-plugin-gravity-forms"
import Layout from "../components/common/layout"
import Head from "../components/common/head"

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
    <Layout>
      <Head title="Contact" />
      <div className="bg-gradient-to-t from-purple-500 to-pink-500 h-screen flex justify-center items-center">
        <div className="container mx-auto">
          <div className="w-full md:w-6/12 ml-auto mr-auto text-left">
            <GravityFormForm
              data={form}
              presetValues={{ input_2: "My preset value" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ExamplePage
