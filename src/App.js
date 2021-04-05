import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Start from "./Start";
import Quiz from "./Quiz";
import Documentation from "./Documentation";
// import Finish from './Finish';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/documentation" component={Documentation} />

          {/* <Route path ="/finish" exact component={Finish}/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
