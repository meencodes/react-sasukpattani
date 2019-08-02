import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import bg from '../image/background.jpg';
import styled from 'styled-components';

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

    onSubmit = (e) => {
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

    onChange = (e) => {
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
                {/* <h1>Login</h1>
                <form>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChange.bind(this)} />
                    <br />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange.bind(this)} />
                    <br />
                    <button type="button" onClick={this.onSubmit.bind(this)}>Login</button>
                </form> */}

                <Info1>
                    <Session1>
                        <InfoImg1>
                            <BackgroundImage src={bg} alt="saron" sizes="180vh" />
                        </InfoImg1>
                    </Session1>
                </Info1>
            </div>
        )
    }
}


const Info1 = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const Session1 = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  overflow: hidden;
  position: absolute;
`
const InfoImg1 = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  background: black;
`
const BackgroundImage = styled.img`
top: 0;
right: 0;
width: 100vw;
height: 100%;
z-index: 0;
position: absolute;
object-fit: cover;
`

export default App;
