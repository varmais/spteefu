import React from 'react';
import AlbumService from '../services/AlbumService';

class Sidebar extends React.Component {
    
    handleClick(id) {
        AlbumService.getAlbums(id);
    }

    render() {
        var rows = [];

        this.props.artists.forEach((artist, index) => {
            rows.push(
                <li key={index} className="list-group-item" onClick={this.handleClick.bind(this, artist.id)}>
                    {artist.name}
                </li>
            );
        });    

        return (
            <div className="sidebar">
                <ul className="list-group">
                    {rows}
                </ul>
            </div>
        );
    }
}

export default Sidebar;