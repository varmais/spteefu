import AppDispatcher from '../dispatchers/AppDispatcher';
import ApiConstants from '../constants/ApiConstants';

export default {
    gotArtists: (artists) => {
        AppDispatcher.dispatch({
            actionType: ApiConstants.ARTISTS_GET,
            artists: artists
        });
    }
};