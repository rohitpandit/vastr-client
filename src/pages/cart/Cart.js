import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Cart.module.css';

const Cart = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div>Cart page</div>
		</div>
	);
};

export default Cart;
