import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import homebg from "../images/homebg.png"
import aboutImg from "../images/about.png"
import menuImg from "../images/menu.png"
import menu1 from "../images/menu1.png"
import menu2 from "../images/menu2.png"
import menu3 from "../images/menu3.png"
import menu4 from "../images/menu4.png"

const Home = () => (
  <section className="h-32rem lg:h-screen mt-4-8rem lg:mt-0 bg-center bg-cover flex justify-center items-center gradient" style={{backgroundImage: `url(${homebg})`}} id="home">
    <div className="container mx-auto px-4 z-10 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl font-bold mb-2">Making Food Taste Better.</h2>
      <p className="font-serif mb-6 text-lg lg:max-w-50%">Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam deditšnihil dicam hoc loco de me; </p>
      <a className="btn" href="#menu">More details</a>
    </div>
  </section>
)

const About = () => (
  <section className="container mx-auto px-4 py-6 md:py-12 lg:flex" id="about">
    <div className="inline-block lg:max-w-50%">
      <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-green-600 font-bold">About us</h2>
      <p className="xl:text-lg lg:max-w-75%">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.
      </p>
    </div>
    <img src={aboutImg} className="hidden lg:block box-border ml-16 my-8 shadow-xl h-auto object-cover max-w-47%" alt=""></img>
  </section>
)

const MenuCard = (props) => (
  <div className="h-56 w-48 bg-gray-100 mb-4 md:m-4 flex flex-col justify-start items-center">
    <div className="h-40 w-40 bg-black mt-4 bg-center bg-cover" style={{backgroundImage: `url(${props.img})`}}></div>
    <p className="mt-3">{props.text}</p>
  </div>
)

const Menu = () => (
  <section className="bg-center bg-cover" style={{backgroundImage: `url(${menuImg})`}} id="menu">
    <div className="container mx-auto px-4 py-4 flex justify-center items-center flex-col">
      <h2 className="text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-green-600 text-center font-bold mt-4">Our Specialities</h2>
      <p className="text-white text-center lg:max-w-50% mb-8">Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla port or accumsan tincidunt.</p>
      <div className="flex flex-wrap flex-col md:flex-row justify-center" >
        <MenuCard text="Italiano - 19.99€" img={menu1} />
        <MenuCard text="Lemonia - 19.99€" img={menu2} />
        <MenuCard text="Mangua - 19.99€" img={menu3} />
        <MenuCard text="Biriyani - 19.99€" img={menu4} />
      </div>
    </div>
  </section>
)

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
  <section className="container mx-auto py-4 px-4">
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
