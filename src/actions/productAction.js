import axios from 'axios';

import {
	PRODUCT_GET_FAIL,
	PRODUCT_GET_REQUEST,
	PRODUCT_GET_SUCCESS,
	PRODUCT_POST_FAIL,
	PRODUCT_POST_REQUEST,
	PRODUCT_POST_SUCCESS,
} from '../constants/productConstant';

export const getProduct = (productId) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_GET_REQUEST });

		//axios request

		dispatch({ type: PRODUCT_GET_SUCCESS, payload: 'success' });
	} catch (error) {
		console.log(error);
		dispatch({ type: PRODUCT_GET_FAIL, error: error });
	}
};

export const postProduct = (productData) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_POST_REQUEST });

		//axios request

		dispatch({ type: PRODUCT_POST_SUCCESS, payload: 'success' });
	} catch (error) {
		console.log(error);
		dispatch({ type: PRODUCT_POST_FAIL, error: error });
	}
};
