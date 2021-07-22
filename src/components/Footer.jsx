import React from "react"
import { Link } from "react-router-dom"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <Link to="/contact">
          <p className="footerText">Contact</p>
        </Link>
        <p className="footerText">&copy; 2021 Jérôme Shaaban</p>
      </div>
    </div>
  )
}

export default Footer
