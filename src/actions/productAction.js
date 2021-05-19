import axios from 'axios';

import {
	PRODUCTLIST_GET_FAIL,
	PRODUCTLIST_GET_REQUEST,
	PRODUCTLIST_GET_SUCCESS,
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

		const { photo, desc, quantity, price, category } = productData;

		const formData = new FormData();
		formData.append('photo', photo);
		formData.append('desc', desc);
		formData.append('quantity', quantity);
		formData.append('price', price);
		formData.append('category', category);

		const result = await axios.post('http://localhost:5000/product', formData);

		console.log(result);

		dispatch({ type: PRODUCT_POST_SUCCESS, payload: 'success' });
	} catch (error) {
		console.log(error);
		dispatch({ type: PRODUCT_POST_FAIL, error: error });
	}
};

export const getProductList = () => async (dispatch) => {
	try {
		dispatch({ type: PRODUCTLIST_GET_REQUEST });

		//axios request

		dispatch({
			type: PRODUCTLIST_GET_SUCCESS,
			payload: ['success', 'success1'],
		});
	} catch (error) {
		console.log(error);
		dispatch({ type: PRODUCTLIST_GET_FAIL, error: error });
	}
};
