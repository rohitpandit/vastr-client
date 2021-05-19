import axios from 'axios';
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

export const getOrders = () => async (dispatch) => {
	try {
		dispatch({ type: ORDER_GET_REQUEST });

		//axios request
		const result = await axios.get('http://localhost:5000/order');

		dispatch({ type: ORDER_GET_SUCCESS, payload: result.data.orderList });
	} catch (error) {
		console.log(error);
		dispatch({ type: ORDER_GET_FAIL });
	}
};

export const addToOrders = (product) => async (dispatch) => {
	try {
		dispatch({ type: ORDER_POST_REQUEST });
		console.log('Action', product);

		product.quantity = 1;

		//axios request
		const result = await axios.post('http://localhost:5000/order', { product });

		dispatch({ type: ORDER_POST_SUCCESS, payload: result.data.orderList });
	} catch (error) {
		console.log(error);
		dispatch({ type: ORDER_POST_FAIL });
	}
};

export const incrementOrder = (productId) => async (dispatch) => {
	try {
		dispatch({ type: ORDER_INCREMENT_REQUEST });

		const result = await axios.post(
			`http://localhost:5000/order/increment/${productId}`
		);
		dispatch({ type: ORDER_INCREMENT_SUCCESS, payload: result.data.orderList });
	} catch (error) {
		console.log(error);
		dispatch({ type: ORDER_INCREMENT_FAIL });
	}
};

export const decrementOrder = (productId) => async (dispatch) => {
	try {
		dispatch({ type: ORDER_DECREMENT_REQUEST });

		const result = await axios.post(
			`http://localhost:5000/order/decrement/${productId}`
		);
		dispatch({ type: ORDER_DECREMENT_SUCCESS, payload: result.data.orderList });
	} catch (error) {
		console.log(error);
		dispatch({ type: ORDER_DECREMENT_FAIL });
	}
};
