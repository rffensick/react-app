import {combineReducers} from 'redux';
import {countReducer} from './counter';

export default combineReducers({
  count: countReducer
});