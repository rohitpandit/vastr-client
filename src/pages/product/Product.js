import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Product.module.css';

const Product = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div>Login page</div>
		</div>
	);
};

export default Product;
