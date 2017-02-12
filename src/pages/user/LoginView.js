import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (

        <section className="login">
            <div className="row">
                <div id="autoriz" className="col-md-3">
                    <h2>Авторизация</h2>
                </div>
            </div>
            <div id="login" className="row">
                <div className="col-md-1">
                    <p>Логин: </p>
                </div>
                <div className="col-md-4">
                    <input type="text" placeholder=""/>
                </div>
            </div>
            <div id="password" className="row">
                <div className="col-md-1">
                    <p>Пароль: </p>
                </div>
                <div className="col-md-4">
                    <input type="text" placeholder=""/>
                </div>
            </div>
            <div id="access" className="row">
                <div className="col-md-2">
                    <button className="btn btn-success">Войти</button>
                </div>
                <div id="registration" className="col-md-2">
                    <a href="#">Регистрация</a>
                </div>
            </div>
        </section>
        );
    }

}
