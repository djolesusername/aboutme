import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Courses from "./Courses";
import { Button } from "antd";
import CV from "./CV.pdf";

import memyselfandI from "./memyselfandI.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="memyselfandI" src={memyselfandI} alt="Smiley face" />
        <h1> Djordje Cvetkovic </h1>
        <div className="App-nav">
          <Button.Group>
            <Button>
              <Link className="linkz" to="/">
                Home
              </Link>
            </Button>
            <Button>
              <Link className="linkz" to="/projects">
                Projects
              </Link>
            </Button>
            <Button>
              <Link className="linkz" to="/courses">
                Courses
              </Link>
            </Button>
            <Button>
              <Link className="linkz" to="/cv.pdf" download>
                CV
              </Link>
            </Button>
          </Button.Group>
        </div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
