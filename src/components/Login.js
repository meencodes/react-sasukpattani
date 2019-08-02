import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    // this.login = this.login.bind(this);
    // this.onChange = this.onChange.bind(this);

  }

  submitlogin(e) {

    const { username, password } = this.state
    const data = { username: username, password: password }

    const url = "http://192.168.0.158:8080/api/v1/login";

    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        const result = res.data

        if (result.result === "success") {
          localStorage.setItem("token", result.data)
          console.log(result.data)

        } else {
          console.log('Login Failed')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form>
          <input type="text" name="username" placeholder="username" onChange={this.onChange.bind(this)} />
          <br/>
          <input type="password" name="password" placeholder="password" onChange={this.onChange.bind(this)} />
          <br/>
          <button type="button" onClick={this.submitlogin.bind(this)}>Login</button>
        </form>
      </div>
    )
  }
}

export default App;
