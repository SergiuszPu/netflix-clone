import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './screen/home/Home';
import Signin from './screen/signin/Signin';
import Signup from './screen/signup/Signup';

function App() {
  return (
    <Router> 
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/signin">
        <Signin/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
    </Router>
  );
}

export default App;
