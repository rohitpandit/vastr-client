import axios from 'axios';
import {
	LOGIN_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	SIGNUP_FAIL,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
} from '../constants/authConstants';

export const login = (userInfo) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		//dummy token
		const token = 13;
		setTimeout(() => {
			dispatch({ type: LOGIN_SUCCESS, payload: token });
		}, 2000);
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, error: error.response.data.message });
	}
};

export const signup = (userInfo) => async (dispatch) => {
	try {
		dispatch({ type: SIGNUP_REQUEST });

		//dummy token
		const token = 13;

		setTimeout(() => {
			dispatch({ type: SIGNUP_SUCCESS, payload: token });
		}, 2000);
	} catch (error) {
		dispatch({ type: SIGNUP_FAIL, error: error.response.data.message });
	}
};
