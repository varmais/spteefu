import React from 'react';
import Uri from 'jsuri';
import LoginActions from '../actions/LoginActions';
import AuthService from '../services/AuthService';

class Login extends React.Component {

    componentDidMount() {
        var token = new Uri('?' + window.location.hash.split('#/')[1]).getQueryParamValue('access_token');
        if (token) {
            LoginActions.loginUser(token);    
        }
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