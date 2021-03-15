import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import userContext from '../../context/userContext';

class Header extends Component {

    static contextType = userContext;

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        }
    }

    logout = () => {
        this.context.setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
        window.location.href="/";
    }

    render() {
        return (
            <div className="container_header">
                <div className='header_flex'>
                {this.context.userData.user ? (
                    <>
                        <div className="header-content">Hi, {this.context.userData.user}</div>
                        <div onClick={this.logout} className="headerBtn">Logout</div>
                    </>
                ) : (
                    <div>
                        <Link to='/auth/login'><div className="headerBtn loginBtn">Login</div></Link>
                    </div>
                )}
                    <Link to='/'><div id="headerHomeBtn" className="headerBtn">Home</div></Link>
                </div>
            </div>
        );
    }
}

export default Header;
