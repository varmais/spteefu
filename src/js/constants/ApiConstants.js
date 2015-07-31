var BASE_URL = 'https://api.spotify.com/v1';

export default {
    USER_API: BASE_URL + '/me/',
    ARTISTS_GET: 'ARTISTS_GET',
    ARTISTS_API: BASE_URL + '/me/following?type=artist',
    ALBUMS_GET: 'ALBUMS_GET',
    ALBUMS_API: BASE_URL + '/artists/{{id}}/albums'
};