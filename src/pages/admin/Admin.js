import React from 'react';


class Admin{

    render() {
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
                        <li className="active"><a href="#tab1"  data-toggle="tab">Футобльное поле</a></li>
                        <li><a href="#tab2"  data-toggle="tab">Районы</a></li>
                        <li><a href="#tab3"  data-toggle="tab">Теги</a></li>
                        <div className="admin_ABC">
                            <input type="checkbox" name="sort" value="rad1"/>А-Я
                        </div>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane active" id="tab1">
                            <table>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tab-pane" id="tab2">
                            <table>
                                <tr>
                                    <th>Район</th>
                                    <th>Адрес поля</th>
                                </tr>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="tab-pane" id="tab3">
                            <table>
                                <tr>
                                    <th>Тег</th>
                                    <th>Адрес поля</th>
                                </tr>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                        <input className="create_field_button" type="submit" value="Создать"/>
                </div>
            </form>
        );
    }
}

export default Admin;
