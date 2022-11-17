import * as React from 'react'
import { Link ,useStaticQuery,graphql} from 'gatsby'

import { 
  container,
  heading, 
  nav_links, 
  nav_links_item, 
  nav_links_text,
  siteTitle,
   

} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 

  const {title} = data.site.siteMetadata; 
  

  return (
    <div className={container}>
      <header className={siteTitle}>{title}</header>
      <nav>
        <ul className={nav_links}>
          <li className={nav_links_item}><Link to="/" className={nav_links_text}>Home</Link></li>
          <li className={nav_links_item}><Link to="/about" className={nav_links_text}>About</Link></li>
          <li className={nav_links_item}><Link to="/blog" className={nav_links_text}>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout