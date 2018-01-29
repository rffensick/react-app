import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import logger from '../middlewares/logger';
import idRandom from '../middlewares/idRandom';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, idRandom, api);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
