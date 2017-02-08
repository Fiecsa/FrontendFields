import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showUsers } from '../../actions'
import { Table } from 'react-bootstrap'
import {reduxForm} from 'redux-form';
import {deleteArticle} from '../../actions/index';
import SearchBar from '../../components/search_bar';
import {Link} from 'react-router';


class Home extends Component {
  
  componentWillMount() {
    this.props.showUsers()
  }

    onSubmit(){
        this.context.router.push('/NewArticle');
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
      return this.props.users.map((user) => {
      return (



          <div key={user.id} className='field-block col-md-6'>
          <p>Адрес:{user.adress}</p>
          <p>Способ оплаты:{user.cost_type}</p>
          <p>Тип поля:{user.field_type}</p>
          <p>Время работы:{user.time}</p>
          <p>Телефон:{user.phone}</p>
          <hr/>
          <p className="tags">
              {user.tags.map((tag)=>{
              return(
                  <div className="tag">{tag.name}</div>
              )
          })}
          </p>
          <h5>#{user.id}</h5>
          <button className="btn btn-outline-danger btn-sm" onClick={this.deleteButtonClick.bind(this,user.id)}>
              Удалить поле
          </button>
      </div>

      )
    })
  }
  
  render() {
    return (
      <div>
        <h2>Поля</h2>

          <div className="row">
              <div className="col-md-12">
                  <SearchBar onSearchTerm={this.componentWillMount.bind(this)} />
              </div>
          </div>

          <div>
              <Link to="articles/new" className="btn btn-warning">
                  Create Article
              </Link>
          </div>
            <div>
          <Link to="login" className="btn btn--login">Login</Link>
            </div>

          <div className='row b-list-caret'>
              { this.renderUsersList() }

          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  }
}


export default connect(mapStateToProps, { showUsers, deleteArticle })(Home)