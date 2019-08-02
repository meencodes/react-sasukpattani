import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {

    constructor(props) {
        super(props)
        localStorage.removeItem("token")
    }

    render() {

        return (
            <div>
                <h1>5555555555</h1>
                <Link to="/">Login Again</Link>
            </div>
        )
    }
}

export default Logout;