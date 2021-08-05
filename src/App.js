import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Canvas from "./component/Canvas";
import Home from "./component/Home";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/canvas" component={Canvas} />
      </Switch>
    </Router>
  )
}

export default App;

