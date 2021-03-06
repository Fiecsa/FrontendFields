import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import axios from 'axios';

let Router = require('react-router');


class Admin extends Component {

    constructor() {
        super();
        this.fetchDistricts = this.fetchDistricts.bind(this);
        this.fetchTag = this.fetchTag.bind(this);
        this.fetchField = this.fetchField.bind(this);
        this.districtToState = this.districtToState.bind(this);

        this.state = {
            districtList: [],
            tagList: [],
            fieldList: [],
        }
    }

    componentDidMount() {
        this.fetchDistricts();
        this.fetchTag();
        this.fetchField();
    }

    districtToState(data) {
        this.setState({districtList: data});
    }

    tagToState(data) {
        this.setState({tagList: data});
    }

    fieldToState(data) {
        this.setState({fieldList: data});
    }

    fetchDistricts()
    {
        axios.get('http://46.236.137.153/district', {
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
        axios.get('http://46.236.137.153/tag', {
            responseType: 'json'
        })
        .then((response) => {
            this.tagToState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    fetchField()
    {
        axios.get("http://46.236.137.153/field", {
            responseType: 'json'
        })
        .then((response) => {
            this.fieldToState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    delField(itemId)
    {
        let me = this;

        axios.delete('http://46.236.137.153/field/' + itemId,{
            responseType: 'json'
        })
            .then(function () {
                alert('Данные удалены.');
                me.fetchField();
            })
    }

    delDistrict(itemId)
    {
        let me = this;
        axios.delete('http://46.236.137.153/district/' + itemId,{
            responseType: 'json'
        })
            .then(function () {
                console.log(itemId);
                alert('Данные удалены.');
                me.fetchDistricts();
            })
            .catch(function () {
                alert("Данный район используется.")
            })
    }

    delTag(itemId)
    {
        let me = this;

        axios.delete('http://46.236.137.153/tag/' + itemId,{
            responseType: 'json'
        })
            .then(function () {
                alert('Данные удалены.');
                me.fetchTag();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    changeTag(id)
    {
        Router.browserHistory.push(`/edit_tag/${ id }`);
    }

    changeDistrict(id)
    {
        Router.browserHistory.push(`/edit_district/${ id }`);
    }


 renderDistrict(item) {
     return (
        <tr key ={item.id} className="districts">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td className="action">
                <div className="button-action">
                    <input type="button" value="Изменить" onClick={ () => {
                        console.log(item.id);
                        this.changeDistrict(item.id);
                    } }/>
                    <input type="button" onClick={() => {
                        this.delDistrict(item.id);
                    }} value='Удалить'/>
                </div>
            </td>
        </tr>
     )
}

 renderTag(item) {
     return (
         <tr key ={item.id} className="tags">
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td className="action">
                 <div className="button-action">
                     <input type="button" value="Изменить" onClick={ () => {
                         this.changeTag(item.id, item.name);
                     } }/>
                     <input type="button" onClick={() => {
                         this.delTag(item.id);
                     }} value='Удалить'/>
                 </div>
             </td>
         </tr>
     )
}

 renderField(item) {
     return (
         <tr key ={item.id} className="table_field">
             <td>{item.id}</td>
             <td>{item.adress}</td>
             <td>{item.cost_type}</td>
             <td>{item.field_type}</td>
             <td>{item.time}</td>
             <td>{item.phone}</td>
             <td>{item.district}</td>
             <td className="action">
                 <div className="button-action">
                    <button>Изменить</button>
                     <input type="button" onClick={() => {
                         this.delField(item.id);
                     }} value='Удалить'/>
                 </div>
             </td>
         </tr>
     )
 }

 render(){
     const {districtList, tagList, fieldList} = this.state;

     const districts = districtList.map(item => this.renderDistrict(item));

     const tag = tagList.map(item => this.renderTag(item));

     const field = fieldList.map(item => this.renderField(item));

     return (

         <form className="form-admin">
             <div className="admin_options col-md-3">
                 <input type="text"/>
                 <input type="button" value="Поиск"/>
                 <hr/>
                 <div className="admin_area">
                 </div>
                 <div className="admin_tags">

                 </div>
             </div>

             <div className="col-md-8">

                 <ul className="nav nav-tabs">
                     <li className="active"><a href="#tab1"  data-toggle="tab">Футбольное поле</a></li>
                     <li><a href="#tab2"  data-toggle="tab">Районы</a></li>
                     <li><a href="#tab3"  data-toggle="tab">Теги</a></li>
                     <div className="admin_operation">
                         <Link name="addField"  to='/articles' className="admin_add">Добавить футбольное поле</Link>
                         <Link name="addDistrict"  to='/district' className="admin_add">Добавить район</Link>
                         <Link name="addTag"  to='/tag' className="admin_add">Добавить тег</Link>
                     </div>
                 </ul>


                 <div className="tab-content">
                     <div className="tab-pane active" id="tab1">
                         <table className="table_field">
                             <thead>
                                 <tr>
                                     <th>ID</th>
                                     <th>Адрес</th>
                                     <th>Тип оплаты</th>
                                     <th>Тип поля</th>
                                     <th>Рабочее время</th>
                                     <th>Телефон</th>
                                     <th>Район</th>
                                     <th>Действия</th>
                                 </tr>
                             </thead>
                             <tbody className="action">
                                 { field }
                             </tbody>
                         </table>
                     </div>

                     <div className="tab-pane" id="tab2">
                         <table id="district" className="table_district">
                             <thead>
                                 <tr>
                                     <th>ID</th>
                                     <th>Район</th>
                                     <th>Действия</th>
                                 </tr>
                             </thead>
                             <tbody>
                                { districts }
                             </tbody>
                         </table>
                     </div>

                     <div className="tab-pane" id="tab3">
                         <table className="table_tags">
                             <thead>
                                 <tr>
                                     <th>ID</th>
                                     <th>Тег</th>
                                     <th>Действия</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {tag}
                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
         </form>
     );
    }
}

export default Admin;
