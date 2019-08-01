import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="Login">
        <table>
          <tr>
            <td>username</td>
            <td><input type="text" name="username" /></td>
          </tr>
          <tr>
            <td>password</td>
            <td><input type="password" name="password" /></td>
          </tr>
          <tr align='center'>
            <td colSpan="2"><input type="Submit" name="submit" /></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
