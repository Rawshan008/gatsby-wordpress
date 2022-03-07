import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query Menus {
      allWpMenuItem(
        filter: { locations: { eq: PRIMARY } }
        sort: { order: ASC, fields: id }
      ) {
        nodes {
          id
          label
          url
        }
      }
    }
  `)
  const menus = data.allWpMenuItem.nodes
  return (
    <div className="bg-bg-header py-2">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="logo text-white font-bold text-2xl uppercase">
          logo
        </a>
        <div className="menu">
          <ul className="flex flex-row">
            {menus.map(menu => {
              return (
                <li key={menu.id}>
                  <Link
                    className="inline-block text-white font-medium transition duration-300 py-2 px-2 hover:text-black"
                    to={menu.url}
                  >
                    {menu.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
