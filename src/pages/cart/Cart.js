import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../../components/footer/Footer'
import classes from './Cart.module.css'
import {
  getOrders,
  incrementOrder,
  decrementOrder,
  deleteOrder,
  paymentSuccess,
} from '../../actions/orderAction'
import { loadStripe } from '@stripe/stripe-js'

import { getUser } from '../../actions/userAction'
import CheckoutForm from '../../components/checkoutForm/CheckoutForm'
import { Elements } from '@stripe/react-stripe-js'

const stripe = loadStripe(
  'pk_test_51JGFlFSFYhBO3CRqIErYJau37l3jUcOwle8whIuuPh7VZiOlgFR7m86GPxuI0CRX0EBkTBrWOviG2Fa2oyMbmKIY001pNP8e22',
)

const Cart = (props) => {
  const [update, setUpdate] = useState(false)
  const [sum, setSum] = useState(0)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [showPayment, setShowPayment] = useState(false)
  const dilevary = 100

  const discountPercent = 10

  useEffect(() => {
    props.getOrders()
    props.getUser()
  }, [])

  useEffect(() => {
    if (props.orderError) {
      toast.error(props.orderError)
    }
  }, [props.orderError])

  useEffect(() => {
    if (props.orderSuccess & update) {
      toast.success('updated successfully')
      setUpdate(false)
    }
    if (props.orderSuccess) {
      const s = calculateSum()
      setSum(s)
      setDiscount(calculateDiscount())
      setTotal(calculateTotal())
    }
  }, [props.orderSuccess])

  const calculateSum = () => {
    if (props.orders) {
      return props.orders.reduce(
        (acc, item) => (acc += item.price * item.quantity),
        0,
      )
    }
    return 0
  }

  const calculateDiscount = () => {
    return Math.floor((calculateSum() * discountPercent) / 100)
  }

  const calculateTotal = () => {
    return calculateSum() - calculateDiscount() + 100
  }

  const increment = (productId) => {
    console.log('increase')
    setUpdate(true)
    props.incrementOrder(productId)
  }

  const decrement = (productId, quantity) => {
    console.log('decrease')
    setUpdate(true)
    console.log(quantity)
    if (quantity > 1) {
      props.decrementOrder(productId)
    } else {
      toast.info('cannot make the count 0')
    }
  }

  const deleteItem = (productId) => {
    console.log('delete')
    setUpdate(true)
    props.deleteOrder(productId)
  }

  const paymentSuccessHandler = () => {
    toast.success(`Order placed with ${total} Rupees`)
    props.paymentSuccess()
    props.getOrders()
  }

  const paymentFailureHandler = (data) => {
    toast.error('payment error')
  }

  const handleProceed = () => {
    if (!props.user) {
      toast.error('Please Login')
      return
    }
    if (!props.user.address) {
      toast.error('Please Enter the Shipping Address to proceed')
      return
    }
    setShowPayment(true)
  }

  return (
    <div className={classes.page}>
      <Navbar />
      <div className={`${classes.main} container`}>
        <ToastContainer />
        <div className={classes.info}>
          <div className={`${classes.address} shadow`}>
            <h5>
              Shipping address{' '}
              <Link to="/profile" className="text-info">
                Change
              </Link>
            </h5>
            <hr />
            <p>
              {props.user && props.user.address
                ? props.user.address
                : 'Set your address'}
            </p>
          </div>
          <div className={`${classes.orders} shadow`}>
            <h5>Your Orders:</h5>
            <hr />
            {props.orders && props.orders.length > 0
              ? props.orders.map((item) => (
                  <div className={classes.orderItem} key={item._id}>
                    <img src={item.thumbUrl} alt="" className={classes.image} />
                    <h6>{item.desc}</h6>
                    <div>
                      Quantity:{' '}
                      <h5>
                        <i
                          className="fas fa-plus-square fa-2"
                          onClick={() => increment(item._id)}
                        />{' '}
                        {item.quantity}{' '}
                        <i
                          className="fas fa-minus-square fa-2"
                          onClick={() => decrement(item._id, item.quantity)}
                        />
                      </h5>
                    </div>
                    <div>
                      Price: <h5>&#8377;{item.price}</h5>
                    </div>
                    <i
                      class="fas fa-trash-alt text-danger"
                      onClick={() => deleteItem(item._id)}
                    />
                  </div>
                ))
              : props.orderLoading && (
                  <p>You don't have any orders in your cart yet.</p>
                )}
          </div>
        </div>
        <div className={`${classes.amount} shadow`}>
          <h5>Total</h5>
          <hr />
          {props.orders && props.orders.length > 0 && (
            <>
              <div className="d-flex align-items-center justify-content-around">
                <h6>Item Price:</h6> <h4>&#8377;{sum}</h4>
              </div>
              <div className="d-flex align-items-center justify-content-around">
                <h6>Shipping Price:</h6> <h4>&#8377;100</h4>
              </div>
              <div className="d-flex align-items-center justify-content-around">
                <h6>Discount 10%:</h6> <h4>&#8377;{discount}</h4>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-around">
                <h6 className="text-danger">Net Payable:</h6>{' '}
                <h4 className="text-danger">&#8377;{total}</h4>
              </div>
              <button
                className="btn btn-outline-primary"
                onClick={() => handleProceed()}
              >
                Proceed to Pay
              </button>
              {showPayment && (
                <div>
                  <Elements stripe={stripe}>
                    <CheckoutForm
                      total={total}
                      paymentFailureHandler={paymentFailureHandler}
                      paymentSuccessHandler={paymentSuccessHandler}
                    />
                  </Elements>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  orderLoading: state.order.loading,
  orderError: state.order.error,
  orderSuccess: state.order.success,
  orders: state.order.orders,
  userLoading: state.user.loading,
  userError: state.user.error,
  userSuccess: state.user.success,
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  getOrders: () => dispatch(getOrders()),
  getUser: () => dispatch(getUser()),
  incrementOrder: (productId) => dispatch(incrementOrder(productId)),
  decrementOrder: (productId) => dispatch(decrementOrder(productId)),
  deleteOrder: (productId) => dispatch(deleteOrder(productId)),
  paymentSuccess: () => dispatch(paymentSuccess()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
