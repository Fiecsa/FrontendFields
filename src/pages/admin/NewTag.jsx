import React, {Component, PropTypes} from 'react';
import axios from 'axios';

let serialize = require('form-serialize');
let Router = require('react-router');

class NewTag extends Component {

    addTag(event)
    {
        let form = document.querySelector('#addFormTag');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);

        axios('http://46.236.137.153/tag', {
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
            <form id="addFormTag" className="districtForm">
                <div className="alignDistrict">
                    <div className="col-md-8"><input id="inputDistrict" type="text" name="name" placeholder="Введите новый тег"/></div>
                    <div className="col-md-4"><button type="button" id="addDistrict" onClick={this.addTag}>Добавить</button></div>
                </div>
            </form>
        )
    }
}
export default NewTag;
