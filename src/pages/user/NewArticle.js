import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form'; 
import {createArticle} from '../../actions/index';

class NewArticle extends Component{

  static contextTypes = {
      router: PropTypes.object
  }

      onSubmit(props){
          alert('asd' + this.props);
              this.props.createArticle(props)
                  .then(() => {
                      this.context.router.push('/');
                  });
      }

  render(){
      const {fields:{adress, cost_type, field_type, time, phone}, handleSubmit} = this.props;

      return(
          <section id="create-field" className="container">

                <h1> Создание поля </h1>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                <div className="form-group">
                    <div className="row">
                        <div className="adress">
                           <div className="col-md-3">
                                <p>Адрес:</p>
                           </div>
                           <div className="col-md-6">
                                <input type="text" className="form-control" {...adress} placeholder="Улица"/>
                           </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="cost_type">
                            <div className="col-md-3">
                                <p>Доступ к полю:</p>
                            </div>
                            <div className="col-md-3">
                                <select>
                                    <option>Выберите тип</option>
                                    <option>Платный</option>
                                    <option>Бесплатный</option>
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
                                <select>
                                    <option>Выберите тип</option>
                                    <option>Открытое</option>
                                    <option>Закрытое</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="time">
                            <div className="col-md-3">
                                <p>Рабочее время: </p>
                            </div>
                            <div className="col-md-2">
                                <div className="start-work">
                                    <input type="text" className="form-control" {...time} placeholder="00:00"/>
                                </div>
                            </div>
                            <div id="dash" className="col-md-1">
                                <p> - </p>
                            </div>
                            <div className="col-md-2">
                                <div className="over-work">
                                    <input type="text" className="form-control" {...time} placeholder="00:00"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="phone">
                            <div className="col-md-3">
                                <p>Телефон: </p>
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" {...phone} placeholder="8-(9__)-___-__-__"/>
                            </div>
                        </div>
                    </div>
                </div>
                    <button type="submit" className="btn btn-success">Создать</button>
                </form>

          </section>
      );
  }
}

export default reduxForm({
    form: 'NewArticleForm',
    fields: ['adress', 'cost_type', 'field_type', 'time', 'phone']
}, null, {createArticle})(NewArticle); 


