import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            status: '',
            loggedIn
        }

        // this.login = this.login.bind(this);
        // this.onChange = this.onChange.bind(this);

    }

    submitLogin(e) {
        e.preventDefault()
        const { username, password } = this.state
        const data = { username: username, password: password }

        const url = "http://192.168.0.158:8080/api/v1/login";

        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                const result = res.data

                if (result.result === "success") {
                    localStorage.setItem("token", result.data)

                    console.log(result._status)

                    this.setState({
                        status: result._status,
                        loggedIn: true
                    })

                } else {
                    console.log('Login Failed')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log(this.state);
    }

    render() {
        if (this.state.loggedIn) {
            // if (this.state.status === 'admin') {
            //     return <Redirect to="/admin" />
            // }
            // else if (this.state.status === 'gerneral') {
            //     return <Redirect to="/logout" />
            // }
            // else if (this.state.status === 'suspend') {
            //     return <Redirect to="/suspend" />
            // }
            return <Redirect to="/admin" />
        }

        return (
            <div className="Login">
                <h1>Login</h1>
                <form>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChange.bind(this)} />
                    <br />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange.bind(this)} />
                    <br />
                    <button type="button" onClick={this.submitLogin.bind(this)}>Login</button>
                </form>
            </div>
        )
    }
}

export default App;
