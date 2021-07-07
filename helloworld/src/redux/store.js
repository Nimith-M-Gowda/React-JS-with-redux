import {Reducers} from './incdec/reducers';
import {createStore , applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
export let store = createStore(Reducers,applyMiddleware(logger))