// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    post: postReducer
});

export default rootReducer;
