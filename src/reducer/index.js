import { combineReducers } from 'redux';

import { countReducer } from './counter';
import articles from './articles'
import filterArticles from './filterArticles';

export default combineReducers({
  count: countReducer,
  articles, filterArticles
});