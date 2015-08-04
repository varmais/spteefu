import React from 'react';
import Album from './Album';

class AlbumList extends React.Component {
    render() {

        var albumRows = [];
        var singleRows = [];
        var albums = this.props.albums.filter((album) => album.album_type === 'album');
        var singles = this.props.albums.filter((album) => album.album_type === 'single');

        if (albums.length) {
            albums.forEach((album, index) => {
                albumRows.push(<Album album={album} key={index} />);
            });
        }

        if (singles.length) {
            singles.forEach((album, index) => {
                singleRows.push(<Album album={album} key={index} />);
            });
        }

        return (
            <div className="dashboard">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 dashboard-content">
                            <h3>Albums</h3>
                            {albumRows}          
                        </div>
                    </div>    
                    <div className="row">
                        <div className="col-xs-12 dashboard-content">
                            <h3>Singles</h3>
                            <div className="container-fluid">
                                <div className="row">
                                    {singleRows}  
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );        
    }
}

export default AlbumList;