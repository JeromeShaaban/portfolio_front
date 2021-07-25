import React from "react"
import "../styles/homepage.scss"

const Homepage = () => {
  return (
    <div id="homeDeck">
      <div className="homeContainer">
        <p>
          Bonjour, je suis Jérôme Shaaban, développeur web junior fullstack
          orienté Front-end.
        </p>
        <p>Je suis spécialisé en React et en Javascript.</p>
        <p id="warning">
          /!\ /!\ /!\ Porfolio en cours d'ellaboration /!\ /!\ /!\
        </p>
      </div>
      <div className="homeContainer" id="Skills">
        <div className="SkillsList">
          <h3>Outils</h3>
          <span>
            Git
            <br />
          </span>
          <span>
            GitHub
            <br />
          </span>
          <span>
            VS Code
            <br />
          </span>
          <span>Postman</span>
        </div>

        <div className="SkillsList">
          <h3>Front-end skills</h3>
          <span>
            Javascript
            <br />
          </span>
          <span>
            React JS
            <br />
          </span>
          <span>
            Sass
            <br />
          </span>
          <span>
            Styled-components
            <br />
          </span>
          <span>Context & Reducer</span>
        </div>

        <div className="SkillsList">
          <h3>Back-end skills</h3>
          <span>
            Node JS
            <br />
          </span>
          <span>
            Express JS
            <br />
          </span>
          <span>
            SQL
            <br />
          </span>
          <span>MySQL</span>
        </div>
      </div>
    </div>
  )
}

export default Homepage
