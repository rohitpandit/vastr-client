import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	product: productReducer,
	user: userReducer,
	order: orderReducer,
});

export default rootReducer;
