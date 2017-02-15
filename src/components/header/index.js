import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

    static path = '/';
    
    render() {
        return (
            <header id="header">
                <div className="logo">

                </div>
                <nav className="navbar navbar-default navbar-fixed-top nav-tabs"  role="navigation">
                    <div className="container">
                        <ul className="nav navbar-nav navbar-right nav-tabs">
                            <li><Link to='/'>Главная</Link></li>
                            <li><Link to='articles/new'>Новое поле</Link></li>
                            <li><Link to='/login'>Войти</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
