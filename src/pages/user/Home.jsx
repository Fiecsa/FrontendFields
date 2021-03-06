import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showUsers } from '../../actions';
import { Table } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import {deleteArticle} from '../../actions/index';
import SearchBar from '../../components/search_bar';
import {Link} from 'react-router';

class Home extends Component {

  componentWillMount() {
    this.props.showUsers()
  }

    deleteButtonClick(id){
        this.props.deleteArticle(id);

            this.context.router.push('/');

    }

    handleChange(event) {
        const {value} = event.target;

        const filtered = addres.filter((person) => {
                return person.addres.indexOf(value) >= 0;
            });

        this.setState({ filtered });
    }

renderUsersList() {

      return this.props.users.map((user, index) => {
      return (

<section id="characteristic-fields" className="container" key={ index }>
      <div key={user.id} className='field-block col-md-9'>
         <div id="post-fields" className="post-fields">
             <div className="col-md-4">
                 <img className="field-image" src="style/field.jpg"/>
             </div>
             <div id="description-field" className="col-md-6">
                <p>Адрес: {user.adress}</p>
                <p>Район: {user.district} </p>
                <p>Способ оплаты:  {user.cost_type}</p>
                <p>Тип поля:   {user.field_type}</p>
                <p>Время работы:  {user.time}</p>
                <p>Телефон:    {user.phone}</p>
            </div>
         </div>
          <div className="row"></div>
          <span className="tags">
              {user.tags.map((tag, index)=>{
              return(
                  <p className="tag" key={ index }>{tag.name}</p>
              )
          })}
          </span>
          <h5>#{user.id}</h5>
      </div>
</section>
      )
    })
  }

  render() {
      return (
          <section className="search-field">

              <h2>Поля</h2>

              <div id="search-bar" className="row">
                  <div className="col-md-5">
                      <SearchBar type="text" className="form-control" id="search-string" ref="search"/>
                  </div>
              </div>

              <div>
              </div>

              <div className='row b-list-caret'>
                  { this.renderUsersList() }
              </div>
          </section>
      );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}


export default connect(mapStateToProps, { showUsers, deleteArticle })(Home)