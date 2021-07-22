import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="/contact">
        <p className="footerText">Contact</p>
      </Link>
      <p className="footerText">&copy; 2021 Jérôme Shaaban</p>
    </div>
  )
}

export default Footer
