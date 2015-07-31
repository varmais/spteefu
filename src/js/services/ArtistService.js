import { ARTISTS_API } from '../constants/ApiConstants';
import ArtistActions from '../actions/ArtistActions';
import LoginStore from '../stores/LoginStore';

class ArtistService {
    getArtists() {
        fetch(ARTISTS_API, {
            headers: {
                Authorization: 'Bearer ' + LoginStore.accessToken
            }
        })
        .then((res) => res.json())
        .then((res) => {
            ArtistActions.gotArtists(res.artists);
        })
        .catch((err) => console.error(err));
    }
}

export default new ArtistService();