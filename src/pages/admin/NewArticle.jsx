import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createArticle} from '../../actions/index';
import axios from 'axios';

let  MaskedInput = require('react-maskedinput');

class NewArticle extends Component{

    constructor() {
        super();
        this.fetchDistricts = this.fetchDistricts.bind(this);
        this.fetchTag = this.fetchTag.bind(this);
        this.selectDistrict = this.selectDistrict.bind(this);

        this.state = {
            districtList: [],
            tagList: [],
            currentSelectDistrict: 1
        }
    }

    componentDidMount() {
        this.fetchDistricts();
        this.fetchTag();
    }

    fetchDistricts() {
        let url = "http://46.236.137.153/district";
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: data => this.setState({districtList: data})
        })
    }

    fetchTag() {
        let url = "http://46.236.137.153/tag";
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: (data ) => {
                this.setState({tagList: data})
            }
        })
    }

    selectDistrict(event) {
        this.setState({currentSelectDistrict: event.target.value});
    }

    renderDistrict(item, key) {
        return <option key ={key}>{item.name}</option>
    }

    renderTag(item, key) {
        return (<div key ={key}><input name="tags" type="checkbox">{ item.name }</input></div>)
    }

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createArticle(props)
        .then(() => {
            this.context.router.push('/');
        });
    }

    add_field()
    {
        /* axios({
            method: "POST", /!*POST - предназначен для отправления данных на сервер;*!/
            url: 'http://46.236.137.153/field',
            data: [{
                adress: 'adress',
                district: 'district',
                cost_type: 'cost_type',
                field_type: 'field_type',
                time: 'time',
                phone: 'phone',
                tag: 'tag',
            }]
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log('BLABLABLA');
        });*/
    }

    render(){
        const {fields:{adress, district, cost_type, field_type, time, phone}, handleSubmit} = this.props;
        const {districtList, tagList} = this.state;
        const tag = tagList.map(item => this.renderTag(item));

        return(

            <section id="create-field" className="container">

                <h1> Создание поля </h1>

                <form  id="form_new_field">

                    <div id="add-field-form" className="form-group">
                        <div className="row">
                            <div className="adress">
                                <div className="col-md-3">
                                    <p>Адрес:</p>
                                </div>
                                <div className="col-md-6">
                                    <input name="adress" type="text" className="form-control" {...adress} placeholder="Улица"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="district">
                                <div className="col-md-3">
                                    <p>Район: </p>
                                </div>
                                <div className="col-md-6">
                                    <select name="district" value={ this.state.currentSelectDistrict }
                                     onChange={
                                         (event) => {
                                             this.selectDistrict(event);
                                         }
                                     }
                                    >
                                        {
                                            districtList.map((district, index) => {
                                                return (
                                                    <option
                                                        value={ district.id }
                                                        key={ index }>
                                                            { district.name }
                                                    </option>
                                                );
                                            })
                                        }
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
                                    <select name="cost_type">
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
                                    <select name="field_type">
                                        <option>Открытое</option>
                                        <option>Закрытое</option>
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
                                    <input className="time" name="time" type="text"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="phone">
                                <div className="col-md-3">
                                    <p>Телефон: </p>
                                </div>
                                <div className="col-md-6">
                                    <MaskedInput name="phone" id="phone" mask="+7-(111)-111-11-11" type="text" className="form-control" {...phone}/>
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
                    <button className="btn btn-success" onClick={this.add_field}>Создать</button>
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