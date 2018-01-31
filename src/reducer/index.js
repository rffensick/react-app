import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import articles from './articles'
import comments from './comments';
import filterArticles from './filterArticles';

export default combineReducers({
  articles, 
  comments, 
  filterArticles, 
  router: routerReducer
});