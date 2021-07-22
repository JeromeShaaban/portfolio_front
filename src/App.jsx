import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BackgroundStars from "./components/BackgroundStars"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Projects from "./components/Projects"
import ContactInfos from "./components/ContactInfos"
import MenuContext from "./contexts/MenuContext"
import Footer from "./components/Footer"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <MenuContext.Provider value={{ open: open, setOpen: setOpen }}>
      <Router>
        <BackgroundStars />
        <Header />
        {!open && (
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={ContactInfos} />
          </Switch>
        )}
        <Footer />
      </Router>
    </MenuContext.Provider>
  )
}

export default App
