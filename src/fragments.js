import { graphql } from "gatsby"
export const siteMeta = graphql`
  fragment SiteMeta on WpPostTypeSEO {
    title
    twitterTitle
    twitterImage {
      sourceUrl
      altText
      srcSet
    }
    metaDesc
  }
`
