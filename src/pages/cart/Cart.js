import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/footer/Footer';
import classes from './Cart.module.css';
import { getOrders } from '../../actions/orderAction';
import { getUser } from '../../actions/userAction';

const Cart = (props) => {
	useEffect(() => {
		props.getOrders();
		props.getUser();
	}, []);

	useEffect(() => {
		if (props.orderError) {
			toast.error(props.orderError);
		}
		if (props.orderSuccess) {
			toast.success('got successfully');
		}
	}, [props]);

	return (
		<div className={classes.page}>
			<Navbar />
			<div className={`${classes.main} container`}>
				<ToastContainer />
				<div className={classes.info}>
					<div className={`${classes.address} shadow`}>
						<h5>
							Shipping address{' '}
							<Link to='/profile' className='text-info'>
								Change
							</Link>
						</h5>
						<hr />
						<p>{props.user ? props.user.address : 'Set your address'}</p>
					</div>
					<div className={`${classes.orders} shadow`}>
						<h5>Your Orders:</h5>
						<hr />
						{props.orders &&
							props.orders.map((item) => (
								<div className={classes.orderItem}>
									<img src={item.thumbUrl} alt='' className={classes.image} />
									<h6>{item.desc}</h6>
									<p>
										Quantity:{' '}
										<h5>
											<i class='fas fa-plus-square fa-2'></i> {item.quantity}{' '}
											<i class='fas fa-minus-square fa-2'></i>
										</h5>
									</p>
									<p>
										Price: <h5>&#8377;{item.price}</h5>
									</p>
								</div>
							))}
					</div>
				</div>
				<div className={`${classes.amount} shadow`}>
					<h5>Total</h5>
					<hr />
					<div className='d-flex align-items-center justify-content-around'>
						<h6>Item Price:</h6> <h4>&#8377;1000.00</h4>
					</div>
					<div className='d-flex align-items-center justify-content-around'>
						<h6>Shipping Price:</h6> <h4>&#8377;100.00</h4>
					</div>
					<div className='d-flex align-items-center justify-content-around'>
						<h6>Discount:</h6> <h4>&#8377;10.00</h4>
					</div>
					<hr />
					<div className='d-flex align-items-center justify-content-around'>
						<h6>Net Payable:</h6>{' '}
						<h4 className='text-danger'>&#8377;1090.00</h4>
					</div>
					<button className='btn btn-outline-primary'>
						Pay &#8377;1090.00{' '}
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	orderLoading: state.order.loading,
	orderError: state.order.error,
	orderSuccess: state.order.success,
	orders: state.order.orders,
	userLoading: state.user.loading,
	userError: state.user.error,
	userSuccess: state.user.success,
	user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
	getOrders: () => dispatch(getOrders()),
	getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
