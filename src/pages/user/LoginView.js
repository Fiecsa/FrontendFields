import React from 'react';
import {Link} from 'react-router';

let Router = require('react-router');


export default class Header extends React.Component {

    static path = '/';

    login()
    {
        let url = "http://46.236.137.153/login";

            $.ajax({
                type: "POST", /*POST - предназначен для отправления данных на сервер;*/
                url: url,
                dataType: 'json',
                data: $("#idForm").serialize(), //#idForm - айдишник формы/#idForm - the form ID
                success: function(data)
                {
                    Router.browserHistory.push('/admin');
                },
                error: function ()
                {
                    alert("Неверный логин/пароль.");
                }
            });
    }

    render() {
        return (
            <form id="idForm" className="login">
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
                        <input name="username" type="text" placeholder="Логин"/>
                    </div>
                </div>
                <div id="password" className="row">
                    <div className="col-md-1">
                        <p>Пароль: </p>
                    </div>
                    <div className="col-md-4">
                        <input name="password" type="password" placeholder="*********"/>
                    </div>
                </div>
              <div id="access" className="row">
                    <div className="col-md-2">
                        <button className="btn btn-success" type="button" onClick={this.login}>Войти</button>
                    </div>
                </div>
            </form>
        );
    }
}
