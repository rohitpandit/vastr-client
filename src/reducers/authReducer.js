import {
	LOGIN_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT,
	RESET_AUTH,
	SIGNUP_FAIL,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
} from '../constants/authConstants';

const initialState = {
	admin: false,
	error: null,
	success: false,
	token: null,
	loading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case SIGNUP_REQUEST:
			return {
				...state,
				admin: false,
				loading: true,
				token: null,
				error: null,
				success: false,
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.payload,
				success: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				token: action.payload.token,
				admin: action.payload.admin,
				success: true,
			};
		case SIGNUP_FAIL:
		case LOGIN_FAIL:
			return {
				...state,
				error: action.error,
				success: false,
				loading: false,
			};
		case LOGOUT:
			return {
				...state,
				token: null,
				admin: false,
			};
		case RESET_AUTH:
			return {
				...state,
				error: null,
				success: false,
			};
		default:
			return state;
	}
};

export default authReducer;
