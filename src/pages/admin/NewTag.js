import React, {Component, PropTypes} from 'react';
//import axios from 'axios';

class NewTag extends Component {
    render(){
        return(
            <form>
                <div><input type="text" placeholder="Введите новый тег"/></div>
                <div><button type="submit">Добавить</button></div>
            </form>
        )
    }
}
export default NewTag;
