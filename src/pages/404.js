import React from "react"

import Image from '../components/image'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="text-center text-3xl mt-12 font-bold">404 NOT FOUND</h1>
    <p className="text-center mb-12">Vous avez rencontré un chemin inexistant</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} className="block mx-auto">
      <Image />
    </div>
  </Layout>
)

export default NotFoundPage
