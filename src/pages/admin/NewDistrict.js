import React, {Component, PropTypes} from 'react';
//import axios from 'axios';

class NewDistrict extends Component {
    render(){
        return(
            <form>
                <div><input type="text" placeholder="Введите новый район"/></div>
                <div><button type="submit">Добавить</button></div>
            </form>
        )
    }
}
export default NewDistrict;
