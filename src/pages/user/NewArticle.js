import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form'; 
import {createArticle} from '../../actions/index';
import TimeInput from 'react-time-input';

let TimeWrapper = React.createClass({


    onTimeChangeHandler: function (val) {

        // do something with this value

    },

    render: function() {
        return (
            <TimeInput
                initTime='11:12'
                ref="TimeInputWrapper"
                className='form-control'
                mountFocus='true'
                onTimeChange={this.onTimeChangeHandler}
            />
        );
    }
});
let  MaskedInput = require('react-maskedinput');

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
                                    <TimeInput type="text" id="timepicker-one" name="timepicker-one" className="timepicker" {...time} placeholder="00:00"/>
                                </div>
                            </div>
                            <div id="dash" className="col-md-1">
                                <p> - </p>
                            </div>
                            <div className="col-md-2">
                                <div className="over-work">
                                    <TimeInput type="text" id="timepicker-one" name="timepicker-one" className="timepicker" {...time} placeholder="00:00"/>
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
                                <MaskedInput id="phone" mask="+7-111-111-11-11" type="text" className="form-control" {...phone}/>
                            </div>
                        </div>
                    </div>
                </div>
                    <button type="submit" className="btn btn-success">Создать</button>
                </form>
              <script type="text/javascript" src="src/public/js/jquery-3.1.1.js"></script>
              <script type="text/javascript" src="src/public/js/jquery-3.1.1.min.js"></script>
          </section>
      );
  }
}

export default reduxForm({
    form: 'NewArticleForm',
    fields: ['adress', 'cost_type', 'field_type', 'time', 'phone']
}, null, {createArticle})(NewArticle);


