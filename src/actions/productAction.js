import axios from 'axios'

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
} from '../constants/productConstant'

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_GET_REQUEST })

    console.log('productid', productId)

    //axios request
    const result = await axios.get(
      `https://vastr.herokuapp.com/product/single/${productId}`,
    )

    dispatch({ type: PRODUCT_GET_SUCCESS, payload: result.data.product })
  } catch (error) {
    console.log(error)
    dispatch({ type: PRODUCT_GET_FAIL, error: error })
  }
}

export const postProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_POST_REQUEST })

    const { photo, desc, quantity, price, category } = productData

    const formData = new FormData()
    formData.append('photo', photo)
    formData.append('desc', desc)
    formData.append('quantity', quantity)
    formData.append('price', price)
    formData.append('category', category)

    const result = await axios.post(
      'https://vastr.herokuapp.com/product',
      formData,
    )

    console.log(result)

    dispatch({ type: PRODUCT_POST_SUCCESS, payload: 'success' })
  } catch (error) {
    console.log(error)
    dispatch({ type: PRODUCT_POST_FAIL, error: error })
  }
}

export const getProductList = (type = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTLIST_GET_REQUEST })

    let productList
    let result

    if (type.length > 0) {
      result = await axios.get(`https://vastr.herokuapp.com/product/${type}`)
    } else {
      result = await axios.get(`https://vastr.herokuapp.com/product`)
    }

    productList = result.data.productList

    console.log(productList)

    dispatch({
      type: PRODUCTLIST_GET_SUCCESS,
      payload: productList,
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: PRODUCTLIST_GET_FAIL, error: error })
  }
}

export const incrementProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_INCREMENT_REQUEST })

    const result = await axios.post(
      `https://vastr.herokuapp.com/product/increment/${productId}`,
    )
    console.log(result.data.productList)

    dispatch({
      type: PRODUCT_INCREMENT_SUCCESS,
      payload: result.data.productList,
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: PRODUCT_INCREMENT_FAIL })
  }
}

export const decrementProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DECREMENT_REQUEST })

    const result = await axios.post(
      `https://vastr.herokuapp.com/product/decrement/${productId}`,
    )
    console.log(result.data.productList)
    dispatch({
      type: PRODUCT_DECREMENT_SUCCESS,
      payload: result.data.productList,
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: PRODUCT_DECREMENT_FAIL })
  }
}

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST })

    const result = await axios.delete(
      `https://vastr.herokuapp.com/product/${productId}`,
    )
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: result.data.productList,
    })
  } catch (error) {
    console.log(error)

    dispatch({ type: PRODUCT_DELETE_FAIL })
  }
}
