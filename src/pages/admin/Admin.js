import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Admin.module.css';
import shirt from '../../pages/home/shirt.jpg';
import { postProduct } from '../../actions/productAction';

const Admin = (props) => {
	const [photo, setPhoto] = useState(null);
	const [desc, setDesc] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		if (props.productError) {
			toast.error(props.productError);
		}
		if (props.productSuccess) {
			toast.success('Product added successfully');
		}
	}, [props]);

	const onSubmit = (e) => {
		e.preventDefault();

		props.postProduct({ photo, desc, quantity, price });
		setDesc('');
		setPhoto(null);
		setPrice(0);
		setQuantity(0);
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<div className={` container `}>
				<ToastContainer />
				<div className={`${classes.addItem} shadow`}>
					<h5>Add an Item</h5>
					<hr />
					<form className='p-3 text-center' onSubmit={onSubmit}>
						<input
							type='file'
							className='form-control my-2'
							value={photo}
							onChange={(e) => setPhoto(e.target.file[0])}
						/>
						<input
							type='text'
							placeholder='Description of the product'
							className='form-control my-2'
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
							required
						/>
						<input
							type='number'
							placeholder='Quantity'
							className='form-control my-2'
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							required
						/>
						<input
							type='number'
							placeholder='Price of One piece'
							className='form-control my-2'
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
						<button type='submit' className='btn btn-outline-success  my-3'>
							Add Product
						</button>
					</form>
				</div>
				<div className={`${classes.items} shadow`}>
					<h5>Items List</h5> <hr />
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
			<Footer />
		</div>
	);
};

const mapStateToProps = (state) => ({
	productLoading: state.product.loading,
	productSuccess: state.product.success,
	productError: state.product.error,
});

const mapDispatchToProps = (dispatch) => ({
	postProduct: (productInfo) => dispatch(postProduct(productInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
