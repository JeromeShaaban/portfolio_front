import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BackgroundStars from "./components/BackgroundStars"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Projects from "./components/Projects"
import ContactInfos from "./components/ContactInfos"

function App() {
  return (
    <Router>
      <BackgroundStars />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactInfos} />
      </Switch>
    </Router>
  )
}

export default App
