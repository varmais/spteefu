import AppDispatcher from '../dispatchers/AppDispatcher';
import { LOGIN_USER, LOGOUT_USER, STORAGE_KEY } from '../constants/LoginConstants';
import RouterContainer from '../services/RouterContainer';

export default {
    loginUser: (accessToken) => {

        var savedToken = localStorage.getItem(STORAGE_KEY);

        if (savedToken !== accessToken) {
            let nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';
            RouterContainer.get().transitionTo(nextPath);
            localStorage.setItem(STORAGE_KEY, accessToken);
        }

        AppDispatcher.dispatch({
            actionType: LOGIN_USER,
            accessToken: accessToken
        });
    },
    logoutUser: () => {
        localStorage.removeItem(STORAGE_KEY);
        RouterContainer.get().transitionTo('/login');
        AppDispatcher.dispatch({
            actionType: LOGOUT_USER
        });
    }
}