import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading, 
  nav_links, 
  nav_links_item, 
  nav_links_text,
  navbar 

} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navbar}>
        <ul className={nav_links}>
          <li className={nav_links_item}><Link to="/" className={nav_links_text}>Home</Link></li>
          <li className={nav_links_item}><Link to="/about" className={nav_links_text}>About</Link></li>
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