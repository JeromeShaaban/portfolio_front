import React from "react"
import { Link } from "react-router-dom"
import "../styles/header.scss"
import Menu from "./Menu"

const Header = () => {
  return (
    <div id="HeaderTitle">
      <Menu />
      <Link to="/">
        <span> Welcome to Jérôme Shaaban's Portfolio</span>
      </Link>
    </div>
  )
}

export default Header
