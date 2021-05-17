import {
	ORDER_GET_FAIL,
	ORDER_GET_REQUEST,
	ORDER_GET_SUCCESS,
	ORDER_POST_FAIL,
	ORDER_POST_REQUEST,
	ORDER_POST_SUCCESS,
} from '../constants/orderConstant';

export const getOrders = () => async (dispatch) => {
	try {
		dispatch({ tyep: ORDER_GET_REQUEST });

		//axios request

		dispatch({ type: ORDER_GET_SUCCESS, payload: ['success', 'success'] });
	} catch (error) {
		console.log(error);
		dispatch({ tyep: ORDER_GET_FAIL });
	}
};

export const addToOrders = (productId) => {
	try {
		dispatch({ type: ORDER_POST_REQUEST });

		//axios request

		dispatch({ type: ORDER_POST_SUCCESS, payload: 'success' });
	} catch (error) {
		console.log(error);
		dispatch({ type: ORDER_POST_FAIL });
	}
};
