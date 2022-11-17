import React from "react"
import { SeO } from "../components/seo"

const OneOffPage = () => {
  return (
    <main>
      Hello World
    </main>
  )
}

export default OneOffPage

export const Head = () => (
  <SeO title="One Off Page">
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </SeO>
)