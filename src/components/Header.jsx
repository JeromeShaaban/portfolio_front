import React from "react"
import "../styles/header.scss"
import Menu from "./Menu"

const Header = () => {
  return (
    <div id="HeaderTitle">
      <Menu />
      <span> Welcome to Jérôme Shaaban's Portfolio</span>
    </div>
  )
}

export default Header
