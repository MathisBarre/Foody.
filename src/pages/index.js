import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"


const Home = ({image}) => {
  return (
    <BackgroundImage className="h-32rem lg:h-screen mt-4-8rem lg:mt-0 flex justify-center items-center gradient" fluid={image.childImageSharp.fluid} id="home">
      <div className="container mx-auto px-4 z-10 text-white">
        <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl font-bold mb-2">Making Food Taste Better.</h2>
        <p className="font-serif mb-6 text-lg lg:max-w-50%">Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; </p>
        <a className="btn" href="#menu">More details</a>
      </div>
    </BackgroundImage>
  )
}

const About = ({image}) => (
  <section className="container mx-auto px-4 py-6 md:py-12 lg:flex" id="about">
    <div className="inline-block lg:max-w-50%">
      <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-green-600 font-bold">About us</h2>
      <p className="xl:text-lg lg:max-w-75%">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
      </p>
    </div>
    <div className="hidden lg:block box-border ml-16 my-8 shadow-xl h-auto object-cover max-w-47% w-1/2">
      <Img fluid={image.childImageSharp.fluid} alt="" />
    </div>
  </section>
)

const MenuCard = (props) => (
  <div className="h-56 w-48 bg-gray-100 mb-4 md:m-4 flex flex-col justify-start items-center">
    <BackgroundImage className="h-40 w-40 bg-black mt-4 bg-center bg-cover" fluid={props.img.childImageSharp.fluid}></BackgroundImage>
    <p className="mt-3">{props.text}</p>
  </div>
)

const Menu = ({image, images}) => {
  const titles = [
    "Italiano - 19.99€",
    "Lemonia - 19.99€",
    "Mangua - 19.99€",
    "Biriyani - 19.99€",
  ]
  return (
    <BackgroundImage className="bg-center bg-cover" fluid={image.childImageSharp.fluid} id="menu">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center flex-col">
        <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-green-600 text-center font-bold mt-4">Our Specialities</h2>
        <p className="text-white text-center lg:max-w-50% mb-8">Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla port or accumsan tincidunt.</p>
        <div className="flex flex-wrap flex-col md:flex-row justify-center" >
          {images.edges.map(({ node }, i) => (
            <MenuCard text={titles[i]} img={node} />
          ))}
        </div>
      </div>
    </BackgroundImage>
  )
}

const MealGroup = (props) => (
  <section className="xl:w-47%">
    <h2 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-700 underline my-4">{props.title}</h2>
    {props.plates.map((plate) => (
      <div className="flex">
        <div className="flex-1">
          <h3 className="lg:text-lg font-semibold text-green-600 uppercase">{plate.title}</h3>
          <p className="lg:text-lg">{plate.desc}</p>
        </div>
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 self-end ml-4">{plate.price}</span>
      </div>
    ))}
  </section>
)

const Services = () => (
  <section className="container mx-auto py-4 px-4 pb-16 " id="services">
    <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-center font-bold text-green-700 mt-4">Our menu</h2>
    <p className="text-center mb-8 lg:text-lg">Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
    <div className="xl:flex xl:flex-wrap justify-between">
      <MealGroup
        title="Pizza"
        plates={[
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Margherita",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "16€"
          },
          {
            title: "Hawaian",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "18€"
          },
          {
            title: "Chicken",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "14€"
          }
        ]}
      />
      <MealGroup
        title="Lemo"
        plates={[
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          }
        ]}
      />
      <MealGroup
        title="Fishis"
        plates={[
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          }
        ]}
      />
      <MealGroup
        title="Megis"
        plates={[
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          },
          {
            title: "Mexicana",
            desc: "Donec velit neque, auctor sit amet aliquam velullamcorper sit amet ligula",
            price: "19€"
          }
        ]}
      />
    </div>
  </section>
)

const FormItem = (props) => (
  <div className="flex flex-col font-semibold mt-2">
    <label className="text-green-700" for={props.name}>{props.label}</label>
    <input className="block appearance-none w-full lg:w-64 bg-gray-200 border border-gray-200 text-gray-700 p-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={props.name} name={props.name} type={props.type} />
  </div>
)

const Contact = ({ image }) => (
  <BackgroundImage id="contact" className="bg-center bg-cover" fluid={image.childImageSharp.fluid}>
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-center font-bold text-green-700 mt-4">Book a table</h2>
      <p className="text-center mb-8 lg:text-lg text-white">Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
      <form>
        <div className="mb-4 lg:flex lg:justify-around">
          <FormItem label="Choose a date" name="date" type="date"/>
          <FormItem label="Choose a time" name="time" type="time"/>
          <FormItem label="Number of persons" name="nbPersons" type="number"/>
        </div>
        <input className="btn text-white mx-auto block mt-8 mb-4" type="submit" value="Submit" />
      </form>
    </div>
  </BackgroundImage>
)


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Home  image={data.home} />
    <About image={data.about} />
    <Menu  image={data.menu} images={data.menus} />
    <Services />
    <Contact image={data.contact} />
  </Layout>
)

export const query = graphql`
  query {
    home: file(relativePath: {eq: "homebg.png"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menu: file(relativePath: { eq: "menu.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menus: allFile(filter: {relativePath: {regex: "/^menu\\\\d.png$/"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    contact: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }  
`

export default IndexPage
