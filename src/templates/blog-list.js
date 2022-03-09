// import { graphql, Link } from "gatsby"
// import React from "react"
// import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/common/layout"

// const BlogPosts = props => {
//   const Posts = props.data.allWpPost.edges

//   return (
//     <Layout>
//       <div className="py-11 bg-gradient-to-t from-purple-500 to-pink-500 flex justify-center items-center">
//         <div className="container mx-auto">
//           <div className="w-6/12 ml-auto mr-auto text-center">
//             <h1 className="text-center text-[30px] font-bold text-white mb-2 uppercase">
//               Our Blog
//             </h1>
//             <p className="text-white mb-5">
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
//               aperiam error a commodi voluptate harum.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container py-10 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {Posts.map(post => {
//             const { id, title, slug, featuredImage } = post.node

//             const featureImage = getImage(featuredImage?.node?.localFile)
//             return (
//               <div key={id} className="w-full md:w-4/12">
//                 <div className="p-6">
//                   {featureImage ? (
//                     <GatsbyImage
//                       class="mb-3"
//                       image={featureImage}
//                       alt={title}
//                     />
//                   ) : (
//                     <StaticImage
//                       class="mb-3"
//                       src="../../static/images/placeholder.png"
//                     />
//                   )}
//                   <Link to={`/blog/${slug}`}>
//                     <h3 className="text-xl font-bold mb-3">{title}</h3>
//                   </Link>

//                   <a
//                     className="py-2 px-5 text-sm bg-black text-white inline-block rounded hover:bg-bg-header hover:text-white uppercase"
//                     href={`/blog/${slug}`}
//                   >
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default BlogPosts

// export const query = graphql`
//   query Post {
//     allWpPost {
//       edges {
//         node {
//           slug
//           id
//           title
//           featuredImage {
//             node {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(placeholder: BLURRED)
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
