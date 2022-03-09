import { useStaticQuery, graphql, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/common/layout"

const BlogPosts = () => {
  const Posts = useStaticQuery(graphql`
    query Posts {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            id
            title
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const AllPosts = Posts.allWpPost.edges
  const PagePerPage = 3
  const [list, setList] = useState([...AllPosts.slice(0, PagePerPage)])

  const [loadMore, setLoadMore] = useState(false)

  const [hasMore, setHasMore] = useState(AllPosts.length > PagePerPage)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < AllPosts.length
      const nextResults = isMore
        ? AllPosts.slice(currentLength, currentLength + PagePerPage)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < AllPosts.length
    setHasMore(isMore)
  }, [list])

  return (
    <Layout>
      <div className="py-11 bg-gradient-to-t from-purple-500 to-pink-500 flex justify-center items-center">
        <div className="container mx-auto">
          <div className="w-6/12 ml-auto mr-auto text-center">
            <h1 className="text-center text-[30px] font-bold text-white mb-2 uppercase">
              Our Blog
            </h1>
            <p className="text-white mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              aperiam error a commodi voluptate harum.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {list.map(post => {
            const { id, title, slug, featuredImage } = post.node

            const featureImage = getImage(featuredImage?.node?.localFile)
            return (
              <div key={id} className={`w-full md:w-4/12 ID-${id}`}>
                <div className="p-6">
                  {featureImage ? (
                    <GatsbyImage
                      class="mb-3"
                      image={featureImage}
                      alt={title}
                    />
                  ) : (
                    <StaticImage
                      class="mb-3"
                      src="../../static/images/placeholder.png"
                    />
                  )}
                  <Link to={`/blog/${slug}`}>
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                  </Link>

                  <a
                    className="py-2 px-5 text-sm bg-black text-white inline-block rounded hover:bg-bg-header hover:text-white uppercase"
                    href={`/blog/${slug}`}
                  >
                    Read More
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-14">
          {hasMore ? (
            <button
              className="py-2 px-5 text-sm bg-black text-white inline-block rounded hover:bg-bg-header hover:text-white uppercase"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          ) : (
            <p>No more results</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPosts
