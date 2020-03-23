import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/* NAV BTN */
const BurgerBar = () => <div className="bg-white w-full h-1 rounded-full"></div>

const NavBtn = (props) => (
  <btn className="h-6 w-8 border-solid flex flex-col justify-between lg:hidden cursor-pointer z-20 relative" onClick={props.onClick}>
    <BurgerBar />
    <BurgerBar />
    <BurgerBar />
  </btn>
)

/* NAV */
const NavLink = (props) => <a className="text-white flex-auto flex items-center justify-center m-2 lg:mx-4" href={props.link} onClick={props.onClick}> { props.text }</a>

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      expandClass: "bottom-100/100"
    }

    this.expand = this.expand.bind(this)
  }

  expand () {
    if (this.state.expanded) {
      this.setState({
        expandClass: "bottom-100/100"
      })
    } else {
      this.setState({
        expandClass: "bottom-0"

      })
    }

    this.setState( (state) => ({ expanded: !state.expanded}) )
  }

  render () {
    return (
      <>
        <nav className={`fixed inset-x-0 top-0 bg-gray-900 flex flex-col justify-center text-center z-10  overflow-hidden duration-75 lg:static lg:flex-row ${this.state.expandClass}`}>
          <NavLink onClick={this.expand} text="Home" link="/#home"/>
          <NavLink onClick={this.expand} text="About" link="/#about"/>
          <NavLink onClick={this.expand} text="Menu" link="/#service"/>
          <NavLink onClick={this.expand} text="Services" link="/#menu"/>
          <NavLink onClick={this.expand} text="Contact" link="/#contact"/>
        </nav>
        <NavBtn onClick={this.expand}/>
      </>
    )
  }
}

/* header */
const Header = ({ siteTitle }) => (
  <header className="bg-gray-900 mb-6">
    <div className="mx-auto container py-4 flex items-center justify-between px-4">
      <h1>
        <Link to="/" className="text-white text-3xl font-semibold">
          {siteTitle}
        </Link>
      </h1>

      <div>
        <NavBar />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
