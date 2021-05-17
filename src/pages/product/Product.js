import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './Product.module.css';
import shirt from '../home/shirt.jpg';
import { getProduct } from '../../actions/productAction';
import { addToOrders } from '../../actions/orderAction';

const Product = (props) => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		props.getProduct(12);
	}, []);

	useEffect(() => {
		if (props.productError) {
			toast.error(props.error);
		}
	}, [props.productError]);

	useEffect(() => {
		if (props.productSuccess) {
			setProduct(props.product);
			toast.success('done');
		}
	}, [props.productSuccess]);

	useEffect(() => {
		if (props.orderError) {
			toast.error(props.orderError);
		}
	}, [props.orderError]);

	useEffect(() => {
		if (props.orderSuccess) {
			toast.success('Product added to cart');
		}
	}, [props.orderSuccess]);

	const addToCart = () => {
		const productId = 123;
		props.addToOrders(productId);
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<div className={`${classes.main} container shadow`}>
				<ToastContainer />
				<div className={classes.image}>
					<img src={shirt} alt='' className={classes.imageImg} />
				</div>
				<div className={classes.info}>
					<h3>Brand 1 shirt</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
						dolores autem. Dolorum optio velit hic amet officia tempora
						nesciunt!
					</p>
					<h3 className='text-danger'>&#8377;1000.00</h3>
					<button className='btn btn-outline-success' onClick={addToCart}>
						Add to Cart <i class='fas fa-shopping-cart'></i>
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	productLoading: state.product.loading,
	productError: state.product.error,
	productSuccess: state.product.success,
	product: state.product.product,
	orderLoading: state.order.loading,
	orderError: state.order.error,
	orderSuccess: state.order.success,
});

const mapDispatchToProps = (dispatch) => ({
	getProduct: (productId) => dispatch(getProduct(productId)),
	addToOrders: (productId) => dispatch(addToOrders(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
