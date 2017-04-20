import React, {Component, PropTypes} from 'react';
import axios from 'axios';

let Router = require('react-router');
let serialize = require('form-serialize');

class NewDistrict extends Component {

    addDistrict()
    {
        let form = document.querySelector('#addFormDistrict');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);

        axios('http://46.236.137.153/district', {
            method: 'POST',
            responseType: 'json',
            requestType: 'json',
            headers: {'Content-Type' : 'application/json; charset=UTF-8'},
            data: result,
        })
            .then(function (result) {
                console.log(result);
                Router.browserHistory.push('/admin');
            })
            .catch(function (error) {
                console.log(result);
                console.log(error);
                alert('Заполните поле!');
            });
    }

    render(){
        return(
            <form id="addFormDistrict" className="districtForm">
                <div className="alignDistrict">
                    <div className="col-md-3"><input id="inputDistrict" type="text" name="name" placeholder="Введите новый район"/></div>
                    <div className="col-md-3"><input type="button" id="addDistrict" onClick={this.addDistrict} value="Добавить"/></div>
                </div>
            </form>
        )
    }
}
export default NewDistrict;
