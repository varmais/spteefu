import {
    LOGIN_USER,
    LOGOUT_USER
} from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class LoginStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._accessToken = null;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case LOGIN_USER:
                this._accessToken = action.accessToken;
                this.emitChange();
                break;

            case LOGOUT_USER:
                this.emitChange();
                break;

            default:
                break;
        };
    }

    get accessToken() {
        return this._accessToken;
    }

    isLoggedIn() {
        return !!this._accessToken;
    }
}

export default new LoginStore();