import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import homebg from "../images/homebg.png"

const Home = () => (
  <section className="h-32rem lg:h-screen mt-4-8rem lg:mt-0 bg-center bg-cover flex justify-center items-center gradient" style={{backgroundImage: `url(${homebg})`}} id="home">
    <div className="container mx-auto px-4 z-10 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl font-bold mb-2">Making Food Taste Better.</h2>
      <p className="font-serif mb-6 text-lg lg:max-w-50%">Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; </p>
      <a className="p-3 bg-green-600 rounded inline-block" href="#menu">More details</a>
    </div>
  </section>
)
const About = () => (
  <section>
    
  </section>
)


const Menu = () => (
  <section>
    
  </section>
)

const Services = () => (
  <section>
    
  </section>
)

const Contact = () => (
  <section>
    
  </section>
)


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Menu />
    <Services />
    <Contact />
  </Layout>
)


export default IndexPage
