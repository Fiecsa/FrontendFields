import React, {Component, PropTypes} from 'react';
import axios from 'axios';

let serialize = require('form-serialize');
let Router = require('react-router');

class changeTag extends Component {

    constructor(){
        super();
        this.fetchTag = this.fetchTag.bind(this);

        this.state = {
            tag: '',
        }
    }

    componentDidMount(){
        this.fetchTag();
    }

    tagToState(tag){
        this.setState({tag: tag.data.name});
    }

    fetchTag(){
        axios.get('http://46.236.137.153/tag/' + this.props.params.id, {
            responseType: 'json',
        })
        .then((response) => {
            this.tagToState(response)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    editTag(id)
    {
        let form = document.querySelector('#editForm');
        let obj = serialize(form, { hash: true });

        let result = JSON.stringify(obj);

        axios.put('http://46.236.137.153/tag/' + id,{
            responseType: 'json',
            requestType: 'json',
            headers: {'Content-Type' : 'application/json; charset=UTF-8'},
            data: result,
        })
            .then(function () {
                alert('Тег изменен');
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
                    <div className="titleChange"><h1>Замена тега</h1></div>
                    <div className="previous">
                        <p>Изменить тег
                            <span  className="stateChange">"{ this.state.tag }"</span>
                            на:</p>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <input className="inputChange" type="text" name="name" placeholder={this.state.tag}/>
                        </div>
                        <div className="col-md-3">
                            <button type="button"
                                    id="addDistrict"
                                    onClick={() => {
                                    this.editTag(this.props.params.id);
                            }}>
                                Изменить</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default changeTag;
