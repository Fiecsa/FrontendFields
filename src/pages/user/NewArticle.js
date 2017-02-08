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
      <div className="container">

      <h1> Создание поля </h1>

      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div className="form-group">
          <input type="text" className="form-control" {...adress} />
          <input type="text" className="form-control" {...cost_type} />
          <input type="text" className="form-control" {...field_type} />
          <input type="text" className="form-control" {...time} />
          <input type="text" className="form-control" {...phone} />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'NewArticleForm',
  fields: ['adress', 'cost_type', 'field_type', 'time', 'phone']
}, null, {createArticle})(NewArticle); 


