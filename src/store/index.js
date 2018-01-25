import {createStore, applyMiddleware} from 'redux';
import reducer from './../reducer';
import logger from '../middlewares/logger';
import idRandom from '../middlewares/idRandom';

const enhancer = applyMiddleware(idRandom, logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;
