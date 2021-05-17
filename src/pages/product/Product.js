import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './Product.module.css';
import shirt from '../home/shirt.jpg';
import { getProduct } from '../../actions/productAction';

const Product = (props) => {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		props.getProduct(12);
	}, []);

	useEffect(() => {
		if (props.productError) {
			toast.error(props.error);
		}
		if (props.productSuccess) {
			setProduct(props.product);
			toast.success('done');
		}
	}, []);

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
					<button className='btn btn-outline-success'>
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
});

const mapDispatchToProps = (dispatch) => ({
	getProduct: (productId) => dispatch(getProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
