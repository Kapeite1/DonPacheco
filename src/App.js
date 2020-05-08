import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home.js'
import Petiscos from './petiscos/index.js'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/petiscos' component={Petiscos}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
