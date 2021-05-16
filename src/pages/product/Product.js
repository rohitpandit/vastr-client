import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './Product.module.css';
import shirt from '../home/shirt.jpg';

const Product = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div className={`${classes.main} container shadow`}>
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

export default Product;
