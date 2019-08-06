import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import bg from '../image/background01.jpg';
import styled from 'styled-components';
import GlobalStyle from '../theme/globalStyle';

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

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
        
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
            <div>
                <GlobalStyle />
                <Info1>
                    <Session1>
                        <InfoImg1>
                            <BackgroundImage src={bg} alt="saron" sizes="180vh" />

                        </InfoImg1>
                    </Session1>
                    <Containerlogin100>
                        <FormLogin100>
                            <Form100>
                                <h1>LOGIN | MAJASMEE</h1>
                                <Input type="text" name="username" placeholder="ชื่อผู้ใช้ หรืออีเมล์" value={this.state.username} onChange={this.onChange} />
                                <Input type="password" name="password" placeholder="รหัสผ่าน" value={this.state.password} onChange={this.onChange} />

                                <ContainerButton>
                                    <Button type="button" onClick={this.onSubmit.bind(this)}>เข้าสู่ระบบ</Button>
                                </ContainerButton>
                            </Form100>
                        </FormLogin100>
                    </Containerlogin100>
                </Info1>
            </div>
        )
    }
}

const Info1 = styled.div`
  width:100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  font-family: AmeenDev;
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
const Containerlogin100 = styled.div`
  width: 100;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;

`
const FormLogin100 = styled.div`
  width: 1000px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  flex-direction: row-reverse;

`
const Form100 = styled.div`
  width: 40%;
  background: white;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px 40px 40px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);

  @media (max-width: 992px) {
    width: 60%;
    padding-left: 30px;
    padding-right: 30px;
}

@media (max-width: 768px) {
    width: 100%;
}

@media (max-width: 576px) {
    padding-left: 30px;
    padding-right: 30px;
    /* padding-top: 50px; */
}
`

// ฟอร์มสำหรับกรอกข้อมูล

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border: solid 1px #dbdbdb;
 
  padding: 18px 40px;
  border-radius: 5px;
  color: #999;
  cursor: text;
  
  /* background: #fafafa; */
  font-family: AmeenDev;
  font-size: 18px;
  background: transparent;
  outline: none;

  &:active,
  &:focus {
    border: 1px solid #F4427E;
    /* transition: all 0.4s;
    transform: scaleX(1.1) scaleY(1.1); */
  }
  ::placeholder {
    color: #999;
  }
`

const ContainerButton = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 40px;
`
const Button = styled.button`
  width: 50%;
  padding: 12px 30px;
  background: #ff538d;
  font-family: AmeenDev;
  font-size: 18px;
  border-radius: 5px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
      background: #F4427E;
  }
`

export default App;
