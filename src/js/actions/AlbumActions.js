import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiConstants from '../constants/ApiConstants';

export default {
    gotAlbums: (albums) => {
        AppDispatcher.dispatch({
            actionType: ApiConstants.ALBUMS_GET,
            albums: albums
        });
    }
};