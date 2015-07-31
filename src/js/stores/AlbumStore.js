import { ALBUMS_GET } from '../constants/ApiConstants';
import { LOGOUT_USER } from '../constants/LoginConstants';
import BaseStore from './BaseStore';

class AlbumStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToAction.bind(this));
        this._albums = null;
    }

    _registerToAction(action) {
        switch (action.actionType) {
            case ALBUMS_GET:
                this._albums = action.albums;
                this.emitChange();
                break;

            case LOGOUT_USER:
                this._albums = null;
                this.emitChange;
                break;

            default:
                break;
        };
    }

    get albums() {
        return this._albums;
    }
}

export default new AlbumStore();