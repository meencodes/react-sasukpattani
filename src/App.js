import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Admin from './components/Admin'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/" component={Admin} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
