import {
	ORDER_GET_FAIL,
	ORDER_GET_REQUEST,
	ORDER_GET_SUCCESS,
	ORDER_POST_FAIL,
	ORDER_POST_REQUEST,
	ORDER_POST_SUCCESS,
	ORDER_DECREMENT_FAIL,
	ORDER_DECREMENT_REQUEST,
	ORDER_DECREMENT_SUCCESS,
	ORDER_INCREMENT_FAIL,
	ORDER_INCREMENT_REQUEST,
	ORDER_INCREMENT_SUCCESS,
} from '../constants/orderConstant';

const initialState = {
	loading: false,
	success: false,
	error: null,
	orders: null,
};

const ordereReducer = (state = initialState, action) => {
	switch (action.type) {
		case ORDER_GET_REQUEST:
		case ORDER_POST_REQUEST:
			return {
				...state,
				loading: false,
				error: null,
				success: false,
				orders: null,
			};
		case ORDER_GET_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				orders: action.payload,
			};
		case ORDER_GET_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ORDER_POST_SUCCESS:
			return {
				...state,
				success: true,
				loading: false,
			};
		case ORDER_POST_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case ORDER_DECREMENT_REQUEST:
		case ORDER_INCREMENT_REQUEST:
			return {
				...state,
				loading: true,
				success: false,
			};
		case ORDER_DECREMENT_SUCCESS:
		case ORDER_INCREMENT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				orders: action.payload,
			};
		case ORDER_DECREMENT_FAIL:
		case ORDER_INCREMENT_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default ordereReducer;
