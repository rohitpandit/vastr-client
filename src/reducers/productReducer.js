import {
	PRODUCT_GET_FAIL,
	PRODUCT_GET_REQUEST,
	PRODUCT_POST_SUCCESS,
} from '../constants/productConstant';

const initialState = {
	loading: false,
	success: false,
	error: null,
	product: null,
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_GET_REQUEST:
			return {
				...state,
				loading: true,
				product: null,
				success: false,
				error: null,
			};
		case PRODUCT_POST_SUCCESS:
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
		default:
			return state;
	}
};

export default productReducer;
