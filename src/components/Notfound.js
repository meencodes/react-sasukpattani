import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../theme/globalStyle'

class NotFound extends Component {
    render() {
        return (
            <Container>
                <GlobalStyle />
                <Con>
                    <h1>404</h1>
                    <Line /><h5>This page could not be found.</h5>
                </Con>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: AmeenDev;
    font-size: 40px;
`
const Con = styled.div`
    width: 25vw;
    display: flex;
    align-items: center;
`
const Line = styled.hr`
    border: none;
    border-left: 2px solid;
    height: 8vh;
    width: 1px;  
`

export default NotFound;