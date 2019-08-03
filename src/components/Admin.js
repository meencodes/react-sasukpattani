import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        
        this.state = { 
            loggedIn
        }

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        this.props.history.push('/');
    }

    render() {
        if (this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>หน้าหลัก</h1>
                <button onClick={this.onLogout}>ออกจากระบบ</button>
            </div>
        )
    }
}

export default withRouter(Admin);