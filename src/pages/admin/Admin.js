import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Admin extends Component {

constructor() {
    super();
    this.fetchDistricts = this.fetchDistricts.bind(this);
    this.fetchTag = this.fetchTag.bind(this);

    this.state = {
        data: []
    }
}

    componentDidMount() {
        this.fetchDistricts();
        this.fetchTag();
    }

    fetchDistricts()
    {
        let url = "http://46.236.137.153/district";
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: data => this.setState({data})
        })
    }

    fetchTag()
    {
        let url = "http://46.236.137.153/tag";
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'json',
            success: data => this.setState({data})
        })
    }

 renderDistrict(item, key) {
     return <tr className="districts"><td key ={key}>{item.name}</td></tr>
}

 renderTag(item, key) {
    return <tr className="tags"><td key ={key}>{item.name}</td></tr>
}

    render(){
    const {data} = this.state;
    const districts = data.map(item => this.renderDistrict(item));
    const tag = data.map(item => this.renderTag(item));

        return (

            <form className="form-admin">
                <div className="admin_options col-md-3">
                    <input type="text"/>
                    <input type="button" value="Поиск"/>
                    <hr/>
                    <div className="admin_area">
                        <p>Район</p>
                        <div>
                            <input type="checkbox"/>Кировский
                        </div>
                         <div>
                             <input type="checkbox"/>Советский
                        </div>
                        <div>
                            <input type="checkbox"/>Октябрьский
                        </div>
                    </div>
                    <div className="admin_tags">
                    <p>Теги</p>
                    <div><input type="checkbox"/>Раздевалка</div>
                    <div><input type="checkbox"/>Уборная</div>
                    <div><input type="checkbox"/>Душ</div>
                    <div><input type="checkbox"/>Буфет</div>
                    <div><input type="checkbox"/>Особый</div>
                    </div>
                    <button>Применить</button>
                    <button>Сбросить</button>
                </div>

                <div className="col-md-8">

                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#tab1"  data-toggle="tab">Футбольное поле</a></li>
                        <li><a href="#tab2"  data-toggle="tab">Районы</a></li>
                        <li><a href="#tab3"  data-toggle="tab">Теги</a></li>
                        <div className="admin_operation">
                            <Link name="add_field"  to='articles/new' className="admin_add">Добавить</Link>
                        </div>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane active" id="tab1">
                            <table className="table_field">
                                <tr>
                                    <th>Тип оплаты</th>
                                    <th>Время работы</th>
                                    <th>Адрес</th>
                                    <th>Телефон</th>
                                    <th>Тип поля</th>
                                </tr>
                                <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tab-pane" id="tab2">
                            <table id="district" className="table_district">
                                <thead>
                                    <tr>
                                        <th>Район</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <tr className="districts">
                                       <td>{districts}</td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tab-pane" id="tab3">
                            <table className="table_tags">
                                <tr>
                                    <th>Тег</th>
                                </tr>
                                <tbody>
                                    <tr className="tags">
                                        <td>{tag}</td>
                                    </tr>
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
