import { ARTISTS_GET } from '../constants/ApiConstants';
import { LOGOUT_USER } from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class ArtistStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToAction.bind(this));
        this._artists = null;
    }

    _registerToAction(action) {
        switch (action.actionType) {
            case ARTISTS_GET:
                this._artists = action.artists;
                this.emitChange();
                break;

            case LOGOUT_USER:
                this._artists = null;
                this.emitChange;
                break;

            default:
                break;
        };
    }

    get artists() {
        return this._artists;
    }
}

export default new ArtistStore();