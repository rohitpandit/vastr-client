import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/footer/Footer';
import classes from './Cart.module.css';
import shirt from '../home/shirt.jpg';
import { getOrders } from '../../actions/orderAction';

const Cart = (props) => {
	useEffect(() => {
		props.getOrders();
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
						<p>House no. 2459, Gali no. 103, sant nagar burari, Delhi-84</p>
					</div>
					<div className={`${classes.orders} shadow`}>
						<h5>Your Orders:</h5>
						<hr />
						<div className={classes.orderItem}>
							<img src={shirt} alt='' className={classes.image} />
							<h6>Shirt Cool looking</h6>
							<p>
								Quantity:{' '}
								<h5>
									<i class='fas fa-plus-square fa-2'></i> 1{' '}
									<i class='fas fa-minus-square fa-2'></i>
								</h5>
							</p>
							<p>
								Price: <h5>&#8377;1000.00</h5>
							</p>
						</div>
						<div className={classes.orderItem}>
							<img src={shirt} alt='' className={classes.image} />
							<h6>Shirt Cool looking</h6>
							<p>
								Quantity:{' '}
								<h5>
									<i class='fas fa-plus-square fa-2'></i> 1{' '}
									<i class='fas fa-minus-square fa-2'></i>
								</h5>
							</p>
							<p>
								Price: <h5>&#8377;1000.00</h5>
							</p>
						</div>
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
	order: state.order.order,
});

const mapDispatchToProps = (dispatch) => ({
	getOrders: () => dispatch(getOrders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
