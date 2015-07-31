import React from 'react';
import Router, { Route } from 'react-router';
import Spteefu from './components/Spteefu';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RouterContainer from './services/RouterContainer';
import { STORAGE_KEY } from './constants/LoginConstants';

var routes = (
    <Route path="*" handler={Spteefu}>
    </Route>
);

var router = Router.create({routes});

RouterContainer.set(router);

router.run((Handler, state) => {
    React.render(<Handler />, document.getElementById('content'));
});