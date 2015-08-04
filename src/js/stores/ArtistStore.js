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
        var artists = this._artists;
        if (artists && artists.items && artists.items.length) {
            return artists.items;
        }
        return [];
    }
}

export default new ArtistStore();