import {createStore} from 'redux';
import rootreducers from './Redux/Reducers/main';

const store = createStore(
    rootreducers
);
export default store;