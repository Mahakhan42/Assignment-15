//combine reducers add
import { todoreducers } from "./reducers";
import {combineReducers} from 'redux';


const rootreducers = combineReducers({
    todoreducers   
})
export default rootreducers;