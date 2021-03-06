import React from 'react';
import { RouteHandler } from 'react-router';
import Login from './Login';
import Dashboard from './Dashboard';
import LoginStore from '../stores/LoginStore';

class Spteefu extends React.Component {

    constructor() {
        super();
        this.state = this._getLoginState();
    }

    componentDidMount() {
        this.state = this._getLoginState();
    }

    _getLoginState() {
        return {
            userLoggedIn: LoginStore.isLoggedIn()
        };
    }

    render() {
        var component = this.state.userLoggedIn ? <Dashboard /> : <Login />
        return (
            <div>
                {component}
            </div>
        );
    }
}

export default Spteefu;