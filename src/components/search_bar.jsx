
import React from 'react';

class SearchBar extends React.Component {

    search()
    {
        let url = "http://192.168.1.155/field";

        $.ajax({
            type: "GET",
            url: url,
            data: {
                "query" : $('#search-string').val()
            },
            success: function(data)
            {
                data.forEach(function (field) {
                    /*$('#search-field').empty();*/
                    $('#characteristic-fields').append(
                        "<div key="+field.id+" class='field-block col-md-9'>" +
                        "<div class='post-fields'>"+
                        "<div class='col-md-4'>" +
                        "<img class='field-image' src='style/field.jpg'/>" +
                        "</div>" +
                        "<div id='description-field' class='col-md-6'>" +
                        "<p>Адрес:  " + field.adress + "</p>" +
                        "<p>Способ оплаты: " + field.cost_type + "</p>" +
                        "<p>Тип поля:   " + field.field_type + "</p>" +
                        "<p>Время работы: " + field.time + "</p>" +
                        "<p>Телефон:   "+ field.phone + "</p>" +
                        "</div>" +
                        "</div>" +
                        "<div class='row'></div>"

                    )
                  //DO SHIT WITH FIELD

                    /*






                     */
            })
            },
            error: function ()
            {
                alert("Ошибка.");
            }
        });
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" id="search-string" ref="search"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" /*onClick={(event) => this.props.onSearchTerm(this.refs.componentWillMount.value)}*/ onClick={this.search}>Go!</button>
                </span>
            </div>
        )
    }
}

export default SearchBar;
