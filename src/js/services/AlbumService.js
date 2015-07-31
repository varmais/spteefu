import { ALBUMS_API } from '../constants/ApiConstants';
import AlbumActions from '../actions/AlbumActions';

class AlbumService {
    getAlbums(id) {
        var apiUrl = ALBUMS_API.replace('{{id}}', id) + '?market=FI';
        fetch(apiUrl)
            .then((res) => res.json())
            .then((res) => {
                AlbumActions.gotAlbums(res)
            })
            .catch((err) => console.error(err));
    }
}

export default new AlbumService();