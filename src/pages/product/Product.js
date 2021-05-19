import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './Product.module.css';
import shirt from '../home/shirt.jpg';
import { getProduct } from '../../actions/productAction';
import Loading from '../../components/loading/Loading';
import { addToOrders } from '../../actions/orderAction';

const Product = (props) => {
	const { id } = useParams();
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		props.getProduct(id);
	}, []);

	useEffect(() => {
		if (props.productError) {
			toast.error(props.productError);
		}
	}, [props.productError]);

	useEffect(() => {
		if (props.orderError) {
			toast.error(props.orderError);
		}
	}, [props.orderError]);

	useEffect(() => {
		if (props.orderSuccess && update) {
			toast.success('Product added to cart');
			setUpdate(false);
		}
	}, [props.orderSuccess]);

	const addToCart = () => {
		setUpdate(true);
		props.addToOrders(props.product);
	};

	return (
		<div className={classes.page}>
			{props.loading && <Loading />}
			<Navbar /> {props.productLoading && <Loading />}
			<div className={`${classes.main} container shadow`}>
				<ToastContainer />
				{props.product && (
					<>
						<div className={classes.image}>
							<img
								src={props.product && props.product.url}
								alt=''
								className={classes.imageImg}
							/>
						</div>
						<div className={classes.info}>
							<h3>{props.product.desc}</h3>
							<p></p>
							<h3 className='text-danger'>&#8377;1000.00</h3>
							<button className='btn btn-outline-success' onClick={addToCart}>
								Add to Cart <i className='fas fa-shopping-cart'></i>
							</button>
						</div>
					</>
				)}
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
