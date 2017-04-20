import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createArticle} from '../../actions/index';
import axios from 'axios';

let  MaskedInput = require('react-maskedinput');
let serialize = require('form-serialize');
let Router = require('react-router');

class NewArticle extends Component{

    constructor() {
        super();
        this.fetchDistricts = this.fetchDistricts.bind(this);
        this.fetchTag = this.fetchTag.bind(this);

        this.state = {
            form: {
                adress: 'adress',
                district: 'district',
                cost_type: 'cost_type',
                field_type: 'field_type',
                time: 'time',
                phone: 'phone',
                tag: [],
            },
            districtList: [],
            tagList: [],

        }
    }

    componentDidMount() {
        this.fetchDistricts();
        this.fetchTag();
    }

    addField()
    {
        let form = document.querySelector('#form_new_field');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);
        console.log(result);

        axios('http://46.236.137.153/field', {
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
            console.log(error);
            console.log('213');
            alert('Заполните все поля!');
        });
    }

    fetchDistricts() {
        axios('http://46.236.137.153/district', {
            method: 'get',
            responseType: 'json'
        })
        .then((response) => {
            this.districtToState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })

    }


    fetchTag()
    {
        axios('http://46.236.137.153/tag', {
            method: 'get',
            responseType: 'json'
        })
            .then((response) => {
                this.tagToState(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    tagToState(data) {
        this.setState({tagList: data});
    }

    districtToState(data) {
        this.setState({districtList: data});
    }

    renderTag(item, key) {
        return (<div key ={item.id}><p><input id="tag" name="tagids" type="checkbox" value={item.id}/>{ item.name }</p></div>)
    }

    renderDistrict(item, key) {
        return (<option key ={item.id} name="district_id" type="checkbox" value={item.id}>{ item.name }</option>)
    }


    static contextTypes = {
        router: PropTypes.object
    };


    render(){
        const {fields:{adress, cost_type, field_type, time, phone}, handleSubmit} = this.props;
        const {districtList, tagList} = this.state;
        const tag = tagList.map(item => this.renderTag(item));
        const district = districtList.map(item => this.renderDistrict(item));

        return(

            <section id="create-field" className="container">

                <h1> Добавить поле </h1>

                <form  id="form_new_field">

                    <div id="add-field-form" className="form-group">
                        <div className="row">
                            <div className="adress">
                                <div className="col-md-3">
                                    <p>Адрес:</p>
                                </div>
                                <div className="col-md-6">
                                    <input id="adress" type="text" name="adress" className="form-control" placeholder="Улица"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="district">
                                <div className="col-md-3">
                                    <p>Район: </p>
                                </div>
                                <div className="col-md-6">
                                    <select id="district" name="district_id">
                                        { district }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="cost_type">
                                <div className="col-md-3">
                                    <p>Доступ к полю:</p>
                                </div>
                                <div className="col-md-3">
                                    <select id="cost_type" name="cost_type">
                                        <option>Бесплатный</option>
                                        <option>Платный</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="field_type">
                                <div className="col-md-3">
                                    <p>Тип поля: </p>
                                </div>
                                <div className="col-md-3">
                                    <select id="field_type" name="field_type">
                                        <option>Открытый</option>
                                        <option>Крытый</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="time">
                                <div className="col-md-3">
                                    <p>Время: </p>
                                </div>
                                <div className="col-md-2">
                                    <input id="time" className="time" name="time" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="phone">
                                <div className="col-md-3">
                                    <p>Телефон: </p>
                                </div>
                                <div className="col-md-6">
                                    <MaskedInput name="phone" id="phone" mask="8-111-111-11-11" type="text" className="form-control" {...phone}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="tags">
                                <div className="col-md-3">
                                    <p>Теги: </p>
                                </div>
                                <div className="col-md-3">
                                    { tag }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn btn-success" onClick={ this.addField }>Добавить</div>
                </form>
            </section>
        );
    }
}

export default reduxForm({
        form: 'NewArticleForm',
        fields: ['adress', 'cost_type', 'field_type', 'time', 'phone']
    },
    null, {createArticle})(NewArticle);