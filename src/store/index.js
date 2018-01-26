import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import logger from '../middlewares/logger';
import idRandom from '../middlewares/idRandom';
import api from '../middlewares/api';

const enhancer = applyMiddleware(idRandom, api, logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
