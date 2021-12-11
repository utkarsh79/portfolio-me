import "./App.css";
import Header from "./Components/NavBar/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Projects from "./Components/Projects Page/Projects";
import About from "./Components/About Me Page/About";
import Contact from "./Components/Contact Me Page/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
