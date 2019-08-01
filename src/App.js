import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }

    // this.login = this.login.bind(this);
    // this.change = this.change.bind(this);

  }

  submitlogin(e) {

    console.log('good')
    const { username, password } = this.state
    const data = { username: username, password: password }

    Axios.post('http://localhost:8080/api/v1/login', data)
    .then(res => {
      const result = res.data

      if (result.result === "success") {
        // localStorage.setItem("token", result.data)
        console.log('success')
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  change(e) {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  } 

  render() {
    return (
      <div className="Login">
        <table>
          <tr>
            <td>username</td>
            <td><input type="text" name="username" onChange={this.change.bind(this)}/></td>
          </tr>
          <tr>
            <td>password</td>
            <td><input type="password" name="password" onChange={this.change.bind(this)} /></td>
          </tr>
          <tr align='center'>
            <td colSpan="2">
              <button type="button" onClick={this.submitlogin.bind(this)}>Login</button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
