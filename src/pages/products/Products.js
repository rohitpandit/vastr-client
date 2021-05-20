import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './Products.module.css';
import { addToOrders } from '../../actions/orderAction';
import { Link } from 'react-router-dom';
import { getProductList } from '../../actions/productAction';

const Products = (props) => {
	const { type } = useParams();
	const [update, setUpdate] = useState(false);
	const [priceRange, setPriceRange] = useState(100000);

	useEffect(() => {
		props.getProductList(type);
		setPriceRange(100000);
	}, [props.location]);

	useEffect(() => {
		if (props.orderSuccess && update) {
			toast.success('Prduct added to cart');
			setUpdate(false);
		}
	}, [props.orderSuccess]);

	useEffect(() => {
		if (props.orderError) {
			toast.error(props.orderError);
		}
	}, [props.orderError]);

	const addToCart = (product) => {
		if (!props.token) {
			toast.error('You  must login first');
			return;
		}
		setUpdate(true);
		console.log(product);
		props.addToOrders(product);
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<div className={`${classes.main} container`}>
				<ToastContainer />
				<div className={`${classes.filter} shadow`}>
					<h3>Filter</h3>
					<hr />

					<div className={classes.filterSection}>
						<p>By Price</p>

						<div className='form-check '>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value={1000}
								onChange={(e) => setPriceRange(e.target.value)}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								Upto 1000
							</label>
						</div>
						<div className='form-check '>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value={2000}
								onChange={(e) => setPriceRange(e.target.value)}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								Upto 2000
							</label>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value={3000}
								onChange={(e) => setPriceRange(e.target.value)}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								Upto 3000
							</label>
						</div>
						<div className='form-check '>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value={4000}
								onChange={(e) => setPriceRange(e.target.value)}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								Upto 4000
							</label>
						</div>
						<div className='form-check'>
							<input
								className='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value={5000}
								onChange={(e) => setPriceRange(e.target.value)}
							/>
							<label className='form-check-label' htmlFor='inlineRadio1'>
								Upto 5000
							</label>
						</div>
					</div>
				</div>
				<div className={`${classes.content} `}>
					{props.productList &&
						props.productList.map((product) => {
							if (product.price <= priceRange) {
								return (
									<div key={product._id} className={`${classes.card} shadow`}>
										<div className={classes.image}>
											<Link to={`/product/${product._id}`}>
												<img
													src={product.url}
													alt=''
													className={classes.cardImg}
												/>
											</Link>
										</div>
										<h5 className='m-1'>{product.desc}</h5>
										<h5 className='text-danger'>&#8377;{product.price}</h5>
										<button
											className='btn btn-outline-success'
											onClick={() => addToCart(product)}>
											Add to Cart <i className='fas fa-shopping-cart'></i>
										</button>
									</div>
								);
							}
						})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
	orderLoading: state.order.loading,
	orderSuccess: state.order.success,
	orderError: state.order.error,
	productLoading: state.product.loading,
	productSuccess: state.product.success,
	productError: state.product.error,
	productList: state.product.products,
});

const mapDispatchToProps = (dispatch) => ({
	addToOrders: (product) => dispatch(addToOrders(product)),
	getProductList: (type) => dispatch(getProductList(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
