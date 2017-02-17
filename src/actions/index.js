
import axios from 'axios'
import {GET_ARTICLES, GET_ARTICLE, CREATE_ARTICLE, DELETE_ARTICLE} from './types';

export const SHOW_USERS = 'SHOW_USERS';

/* Server IP
 * 1) 46.236.137.153 - Main
 * 2) 192.100.0.95 - Second
 * 3) 192.168.1.155
 */

export function showUsers() {
    return (dispatch, getState) => {
        axios.get('http://46.236.137.153/field?expand=tags')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data, header: {'Accept': 'application/json'} } )
            }) 
    }
}

export function deleteArticle(id) {
    const request = axios.delete('http://46.236.137.153/field/'+id);

    return{
        type: DELETE_ARTICLE,
        payload: request
    };
}

export function createArticle(props){
    const request = axios.post('http://46.236.137.153/field/', props);
    return{
        type: CREATE_ARTICLE,
        payload: request
    };
}

