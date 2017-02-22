
import React from 'react';

class SearchBar extends React.Component {

    search()
    {
        let url = "http://46.236.137.153/search";

        $.ajax({
            type: "GET", /*POST - предназначен для отправления данных на сервер;*/
            url: url,
            data: {
                "seacrch" : $('#search-string').val()
            },
            success: function(data)
            {
                data.forEach(function (field) {
                  //DO SHIT WITH FIELD

                    /*

                     <div key={field.id} className='field-block col-md-9'>
                     <div className="post-fields">
                     <div className="col-md-4">
                     <img className="field-image" src="style/field.jpg"/>
                     </div>
                     <div id="description-field" className="col-md-6">
                     <p>Адрес:  {field.adress}</p>
                     <p>Способ оплаты:  {field.cost_type}</p>
                     <p>Тип поля:   {field.field_type}</p>
                     <p>Время работы:   {user.time}</p>
                     <p>Телефон:    {field.phone}</p>
                     </div>
                     </div>
                     <div className="row"></div>
                     <p className="tags">
                     {field.tags.map((tag)=>{
                     return(
                     <div className="tag">{tag.name}</div>
                     )
                     })}
                     </p>
                     <h5>#{field.id}</h5>
                     </div>

                     */
            })
            },
            error: function ()
            {
                alert("Ваня пидр Ваня пидр Ваня пидр Ваня пидр Ваня пидр Ваня пидр ");
            }
        });
    }

  render() {
      return (
          <div className="input-group">
              <input type="text" className="form-control" id="search-string" ref="search"/>
              <span className="input-group-btn">
                  <button className="btn btn-default" type="button" /*onClick={(event) => this.props.onSearchTerm(this.refs.componentWillMount.value)}*/onClick={this.search}>Go!</button>
              </span>
          </div>
      )
  }
}

export default SearchBar;
