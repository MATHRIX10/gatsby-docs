// Step 1: Import React
import * as React from 'react'
import { SeO } from '../components/seo'

import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
   <Layout pageTitle="About Me">
       <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
   </Layout>
   
  )
}
export const Head = () => (
  <SeO title = "About Page"/>
)
// Step 3: Export your component
export default AboutPage