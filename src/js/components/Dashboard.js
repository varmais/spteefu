import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import AlbumList from './AlbumList';
import ArtistStore from '../stores/ArtistStore';
import ArtistService from '../services/ArtistService';
import AlbumStore from '../stores/AlbumStore';
import AlbumService from '../services/AlbumService';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            artists: this._getArtists(),
            albums: this._getAlbums()
        };
    }

    componentDidMount() {
        if (!this.state.artists.length) {
            this._requestArtists();
        }

        ArtistStore.addChangeListener(this._onChange.bind(this));
        AlbumStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        ArtistStore.removeChangeListener(this._onChange.bind(this));
        AlbumStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        var artists = this._getArtists();
        var albums = this._getAlbums();
        this.setState({artists, albums});
    }

    _requestArtists() {
        ArtistService.getArtists();
    }

    _getArtists() {
        return ArtistStore.artists;
    }

    _getAlbums() {
        return AlbumStore.albums;
    }

    render() {
        return (
            <div className="dashboard-container">
                <Header />
                <Sidebar artists={this.state.artists} />
                <AlbumList albums={this.state.albums} />
            </div>
        );
    }
}

export default Dashboard;