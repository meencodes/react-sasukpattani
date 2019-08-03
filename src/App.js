import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import Admin from './components/Admin';
// import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/logout" component={Logout} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
