import React from "react"
import {
  StyledInfosDeck,
  StyledInfosContainer,
  StyledNetworkLogo,
} from "../styles/StyledInfos"
import githubLogo from "../assets/github.png"
import linkedinLogo from "../assets/linkedin.png"
import emailLogo from "../assets/email.png"

const ContactInfos = () => {
  return (
    <StyledInfosDeck>
      <StyledInfosContainer>
        <h2>Mes réseaux :</h2>
        <div>
          <a
            href="https://github.com/JeromeShaaban"
            target="_blank"
            rel="noreferrer"
          >
            <StyledNetworkLogo src={githubLogo} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeromeshaaban/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledNetworkLogo src={linkedinLogo} />
          </a>
        </div>
      </StyledInfosContainer>

      <StyledInfosContainer>
        <h2>Me contacter par email :</h2>
        <a
          href="mailto:jerome.shaaban@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <StyledNetworkLogo src={emailLogo} />
        </a>
      </StyledInfosContainer>
    </StyledInfosDeck>
  )
}

export default ContactInfos
