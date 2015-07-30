import React from 'react';
import LoginActions from '../actions/LoginActions';
import AuthService from '../services/AuthService';

class Login extends React.Component {

    constructor() {
        super();
        var token = this._getAccessTokenParameter();
        if (token) {
            console.log(token);
            LoginActions.loginUser(token);
        }
    }

    _getAccessTokenParameter() {
        var token;
        window.location.search.substring(1).split('&').forEach((pair) => {
            pair = pair.split('=');
            if (pair[0] === 'code') {
                token = pair[1];
            }
        });
        return token;
    }

    handleLogin(ev) {
        ev.preventDefault();
        AuthService.login();
    }

    render() {
        return (
            <div className="login-container">
                <h1>Welcome to Spteefu</h1>
                <button className="btn btn-primary" onClick={this.handleLogin.bind(this)}>
                    Login
                </button>
            </div>
        );
    }
}

export default Login;