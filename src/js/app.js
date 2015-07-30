import React from 'react';
import Router, { Route } from 'react-router';
import Spteefu from './components/Spteefu';
import Login from './components/Login';
import LoginActions from './actions/LoginActions';
import RouterContainer from './services/RouterContainer';
import { STORAGE_KEY } from './constants/LoginConstants';

var routes = (
    <Route handler={Spteefu}>
        <Route path="/callback/" handler={Login} />
        <Route path="/login" handler={Login} />
    </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let accessToken = localStorage.getItem(STORAGE_KEY);
if (accessToken) {
    LoginActions.loginUser(accessToken);
}

router.run((Handler) => {
    React.render(<Handler />, document.getElementById('container'));
});