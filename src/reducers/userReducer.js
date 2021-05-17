import {
	USER_GET_FAIL,
	USER_GET_REQUEST,
	USER_GET_SUCCESS,
	USER_POST_FAIL,
	USER_POST_REQUEST,
	USER_POST_SUCCESS,
} from '../constants/userConstant';

const initialState = {
	loading: false,
	success: false,
	error: null,
	user: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_GET_REQUEST:
		case USER_POST_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
				user: null,
				success: false,
			};
		case USER_GET_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				user: action.payload,
			};
		case USER_GET_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		case USER_POST_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
			};
		case USER_POST_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};
