import React from "react"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  return (
    <Helmet
      defaultTitle="Lemonhive | LemonHive"
      title={title}
      titleTemplate="%s | Lemonhive"
    />
  )
}

export default Head
