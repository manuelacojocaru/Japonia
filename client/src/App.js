import Header from './components/Header';
import Home from './pages/Home';
import Form from './pages/Form';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
