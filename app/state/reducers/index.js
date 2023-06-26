import {combineReducers} from "redux";
import BlogReducer from '../reducers/BlogReducer';

const reducers = combineReducers({
    Blog:BlogReducer
})

export default reducers;