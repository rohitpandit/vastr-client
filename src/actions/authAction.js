import axios from 'axios';
import {
	LOGIN_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	SIGNUP_FAIL,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	RESET_AUTH,
	LOGOUT,
} from '../constants/authConstants';
import { removeState, saveState } from '../localstore';

export const login = (userInfo) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		const result = await axios.post(
			'https://pacific-caverns-28419.herokuapp.com/auth/login',
			userInfo
		);

		dispatch({ type: LOGIN_SUCCESS, payload: result.data });
		saveState(result.data.token);

		//removing success value
		setTimeout(() => {
			dispatch({ type: RESET_AUTH });
		}, 2000);
	} catch (error) {
		dispatch({ type: LOGIN_FAIL, error: error.response.data.message });

		//removing Error value
		setTimeout(() => {
			dispatch({ type: RESET_AUTH });
		}, 2000);
	}
};

export const signup = (userInfo) => async (dispatch) => {
	try {
		dispatch({ type: SIGNUP_REQUEST });

		const result = await axios.post(
			'https://pacific-caverns-28419.herokuapp.com/auth/signup',
			userInfo
		);

		dispatch({ type: SIGNUP_SUCCESS, payload: result.data.token });
		saveState(result.data.token);

		//removing success value
		setTimeout(() => {
			dispatch({ type: RESET_AUTH });
		}, 2000);
	} catch (error) {
		dispatch({ type: SIGNUP_FAIL, error: error.response.data.message });

		//removing error value
		setTimeout(() => {
			dispatch({ type: RESET_AUTH });
		}, 2000);
	}
};

export const logout = () => async (dispatch) => {
	dispatch({ type: LOGOUT });
	removeState();
};
