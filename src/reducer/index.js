import { combineReducers } from 'redux';

import { countReducer } from './counter';
import articles from './articles'
import comments from './comments';
import filterArticles from './filterArticles';

export default combineReducers({
  count: countReducer,
  articles, comments, filterArticles 
});