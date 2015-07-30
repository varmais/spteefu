import {
    AUTH_URL,
    CALLBACK_URL,
    CLIENT_ID
} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';

class AuthService {
    
    getLoginUrl() {
        var scopes = ['user-follow-read'];
        var cb = encodeURIComponent(CALLBACK_URL);
        var scope = encodeURIComponent(scopes.join(' '));

        return `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${cb}&scope=${scope}&response_type=code`;
    }

    login() {
        window.location.href = this.getLoginUrl();
    }

}

export default new AuthService();