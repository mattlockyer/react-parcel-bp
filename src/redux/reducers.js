
import { combineReducers } from 'redux';
import { appReducer } from './app';
import { userReducer } from './user';
import { dataReducer } from './data';

export default combineReducers({
	appReducer,
	userReducer,
	dataReducer,
});
