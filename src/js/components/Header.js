import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <span className="navbar-brand">Spteefu</span>
                    </div>
                    <div className="pull-right">
                        UserName n' shit
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;