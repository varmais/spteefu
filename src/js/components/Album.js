import React from 'react';

class Album extends React.Component {

    _handleClick() {
        window.open(this.props.album.uri);
    }

    render() {
        var album = this.props.album;
        return (
            <div className="col-xs-12 col-sm-6 col-md-3 album" onClick={this._handleClick.bind(this)}>
                <img src={album.images[1].url} />
                <p>{album.name}</p>
            </div>
        );
    }
}

export default Album;