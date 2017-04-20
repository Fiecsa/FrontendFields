import React, {Component, PropTypes} from 'react';
import axios from 'axios';

let serialize = require('form-serialize');

class NewTag extends Component {

    addTag(event)
    {
        let form = document.querySelector('#addFormTag');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);

        console.log(result);

        axios.post('http://46.236.137.153/tag', {
            method: 'post',
            responseType: 'json',
            headers: {'Content-Type' : 'application/json'},
            data: result,
        })
            .then(function () {
                alert('OLOLOLOLOLOLOLOLOLO');
                console.log('DAIJOBU');
            })
            .catch(function (error) {
                alert('SADASDASDASDAS');
                console.log(error);
                console.log('nope');
            });
    }

    render(){
        return(
            <form id="addFormTag" className="districtForm">
                <div className="alignDistrict">
                    <div className="col-md-3"><input id="inputDistrict" type="text" name="name" placeholder="Введите новый тег"/></div>
                    <div className="col-md-3"><button type="submit" id="addDistrict" onClick={this.addTag}>Добавить</button></div>
                </div>
            </form>
        )
    }
}
export default NewTag;
