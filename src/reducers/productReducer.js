import {
	PRODUCTLIST_GET_REQUEST,
	PRODUCT_GET_FAIL,
	PRODUCT_GET_REQUEST,
	PRODUCT_GET_SUCCESS,
	PRODUCT_POST_FAIL,
	PRODUCT_POST_REQUEST,
	PRODUCT_POST_SUCCESS,
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
		default:
			return state;
	}
};

export default productReducer;
