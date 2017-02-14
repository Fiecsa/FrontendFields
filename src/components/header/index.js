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
                            <!--<li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                Редактировать
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="">Добавить</a></li>
                                <li><a href="">Изменить</a></li>
                                <li><a href="">Удалить</a></li>
                            </ul>
                        </li>-->
                         </ul>
                    </div>
                </nav>
            </header>
        );
    }

}
