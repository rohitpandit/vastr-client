import {
	USER_GET_FAIL,
	USER_GET_REQUEST,
	USER_GET_SUCCESS,
	USER_POST_FAIL,
	USER_POST_REQUEST,
	USER_POST_SUCCESS,
} from '../constants/userConstant';

export const getUser = () => async (dispatch) => {
	try {
		dispatch({ type: USER_GET_REQUEST });

		//axios request

		dispatch({ type: USER_GET_SUCCESS, payload: 'success' });
	} catch (error) {
		console.log(error);
		dispatch({ type: USER_GET_FAIL });
	}
};

export const postUser = (userData) => async (dispatch) => {
	try {
		dispatch({ type: USER_POST_REQUEST });

		//axios request

		dispatch({ type: USER_POST_SUCCESS, payload: 'success' });
	} catch (error) {
		console.log(error);
		dispatch({ type: USER_POST_FAIL, error: error });
	}
};
