import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ArtistStore from '../stores/ArtistStore';
import ArtistService from '../services/ArtistService';
import AlbumStore from '../stores/AlbumStore';
import AlbumService from '../services/AlbumService';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            artists: this._getArtists()
        };
    }

    componentDidMount() {
        if (!this.state.artists) {
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

        this.setState({
            artists: this._getArtists(),
            albums: this._getAlbums()
        });
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

        var rows = [];
        var albums = this.state.albums;

        if (albums && albums.items && albums.items.length) {
            albums.items.forEach((album, index) => {
                rows.push(<div key={index} className="album">{album.name}</div>);
            });
        }

        return (
            <div className="dashboard-container">
                <Header />
                <Sidebar artists={this.state.artists} />
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 dashboard-content">
                                <h1>Welcome to Spteefu!</h1>
                                {rows}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;