import { combineReducers } from 'redux';
import paramsReducer from './params.reducer';
import displayReducer from './display.reducer';

export const rootReducer = combineReducers({params: paramsReducer, display: displayReducer});
