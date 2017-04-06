import React from 'react';
import axios from 'axios';

let Router = require('react-router');
let serialize = require('form-serialize');


export default class Header extends React.Component {

    static path = '/';

    login()
    {
        let form = document.querySelector('#idForm');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);

        console.log(result);
        axios('http://46.236.137.153/login', {
            method: 'post',
            responseType: 'json',
            requestType: 'json',
            headers: {'Content-Type' : 'application/json; charset=UTF-8'},
            data: result,
        })
            .then(function (response) {
                Router.browserHistory.push('/admin');
            })
            .catch(function (error) {
                alert("Неверный логин/пароль.");
                console.log(error);
            });
            /*$.ajax({
                type: "POST",
                url: url,
                dataType: 'json',
                data: $("#idForm").serialize(),
                success: function(data)
                {
                    Router.browserHistory.push('/admin');
                },
                error: function ()
                {
                    alert("Неверный логин/пароль.");
                }
            });*/
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
