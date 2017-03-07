import { combineReducers } from 'redux';
import { showUsers } from './users'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  user: showUsers
});

export default rootReducer;
