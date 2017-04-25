import React, {Component, PropTypes} from 'react';
import axios from 'axios';

let serialize = require('form-serialize');
let Router = require('react-router');

class changeDistrict extends Component {

    constructor(){
        super();
        this.fetchDistrict = this.fetchDistrict.bind(this);

        this.state = {
            district: '',
        }
    }

    componentDidMount(){
        this.fetchDistrict();
    }

    districtToState(district){
        this.setState({district: district.data.name});
    }

    fetchDistrict(){
        axios.get('http://46.236.137.153/district/' + this.props.params.id, {
            responseType: 'json',
        })
            .then((response) => {
                this.districtToState(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    editDistrict(id)
    {
        let form = document.querySelector('#editForm');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);

        axios.put('http://46.236.137.153/district/' + id, {
            responseType: 'json',
            requestType: 'json',
            headers: {'Content-Type' : 'application/json; charset=UTF-8'},
            data: result,
        })
            .then(function (response) {
                console.log(response);
                alert('Район изменен');
                Router.browserHistory.push('/admin');
            })
            .catch(function (error) {
                console.log(error);
                alert('Ошибка.');
            });
    }

    render(){
        return(
            <form id="editForm" className="districtForm">
                <div className="alignDistrict">
                    <div className="titleChange"><h1>Замена района</h1></div>
                    <div className="previous">
                        <p>Изменить район
                            <span className="stateChange">"{ this.state.district }"</span>
                            на:</p>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <input className="inputChange" type="text" name="name"/>
                        </div>
                        <div className="col-md-3">
                            <button type="button"
                                    id="addDistrict"
                                    onClick={() => {
                                        this.editDistrict(this.props.params.id);
                                    }}>
                                Изменить</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default changeDistrict;
