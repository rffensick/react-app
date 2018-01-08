import { combineReducers } from 'redux';

import { countReducer } from './counter';
import articles from './articles'

export default combineReducers({
  count: countReducer,
  articles
});