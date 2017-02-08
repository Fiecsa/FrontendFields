import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='articles/new'>New Art</Link></li>
                        </ul>


                </div>
            </nav>
        );
    }

}
