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
	PRODUCT_DECREMENT_FAIL,
	PRODUCT_DECREMENT_REQUEST,
	PRODUCT_DECREMENT_SUCCESS,
	PRODUCT_DELETE_FAIL,
	PRODUCT_DELETE_REQUEST,
	PRODUCT_DELETE_SUCCESS,
	PRODUCT_INCREMENT_FAIL,
	PRODUCT_INCREMENT_REQUEST,
	PRODUCT_INCREMENT_SUCCESS,
} from '../constants/productConstant';

const initialState = {
	loading: false,
	success: false,
	error: null,
	product: null,
	products: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_POST_REQUEST:
		case PRODUCT_GET_REQUEST:
			return {
				...state,
				loading: true,
				product: null,
				success: false,
				error: null,
			};
		case PRODUCT_GET_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				product: action.payload,
			};
		case PRODUCT_GET_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		case PRODUCT_POST_SUCCESS:
			return {
				...state,
				success: true,
				loading: false,
			};

		case PRODUCT_POST_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};

		case PRODUCTLIST_GET_REQUEST:
			return {
				...state,
				products: [],
				error: null,
				success: true,
			};
		case PRODUCTLIST_GET_SUCCESS:
			return {
				...state,
				products: action.payload,
				success: true,
				loading: false,
			};
		case PRODUCTLIST_GET_FAIL:
			return {
				...state,
				error: action.error,
				loading: false,
			};
		case PRODUCT_DECREMENT_REQUEST:
		case PRODUCT_INCREMENT_REQUEST:
		case PRODUCT_DELETE_REQUEST:
			return {
				...state,
				loading: false,
				success: false,
				error: null,
			};
		case PRODUCT_DELETE_SUCCESS:
		case PRODUCT_INCREMENT_SUCCESS:
		case PRODUCT_DECREMENT_SUCCESS:
			return {
				...state,
				loading: false,
				success: true,
				products: action.payload,
			};
		case PRODUCT_DELETE_FAIL:
		case PRODUCT_INCREMENT_FAIL:
		case PRODUCT_DECREMENT_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default productReducer;
