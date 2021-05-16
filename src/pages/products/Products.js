import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './Products.module.css';
import shirt from '../home/shirt.jpg';
import pant from '../home/pant.jpg';
import saree from '../home/saree.jpg';

const Products = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div className={`${classes.main} container`}>
				<div className={`${classes.filter} shadow`}>
					<h3>Filter</h3>
					<hr />
					<div className={classes.filterSection}>
						<p>By Brands</p>
						<div class='form-check '>
							<input
								class='form-check-input'
								type='checkbox'
								id='inlineCheckbox1'
								value='option1'
							/>
							<label class='form-check-label' for='inlineCheckbox1'>
								Brand 1
							</label>
						</div>
						<div class='form-check '>
							<input
								class='form-check-input'
								type='checkbox'
								id='inlineCheckbox2'
								value='option2'
							/>
							<label class='form-check-label' for='inlineCheckbox2'>
								Brand 2
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='checkbox'
								id='inlineCheckbox3'
								value='option3'
							/>
							<label class='form-check-label' for='inlineCheckbox3'>
								Brand 3
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='checkbox'
								id='inlineCheckbox3'
								value='option3'
							/>
							<label class='form-check-label' for='inlineCheckbox3'>
								Brand 4
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='checkbox'
								id='inlineCheckbox3'
								value='option3'
							/>
							<label class='form-check-label' for='inlineCheckbox3'>
								Brand 5
							</label>
						</div>
					</div>
					<hr />

					<div className={classes.filterSection}>
						<p>By Price</p>
						<div class='form-check '>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value='option1'
							/>
							<label class='form-check-label' for='inlineRadio1'>
								Upto 1000
							</label>
						</div>
						<div class='form-check '>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value='option1'
							/>
							<label class='form-check-label' for='inlineRadio1'>
								Upto 2000
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value='option1'
							/>
							<label class='form-check-label' for='inlineRadio1'>
								Upto 3000
							</label>
						</div>
						<div class='form-check '>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value='option1'
							/>
							<label class='form-check-label' for='inlineRadio1'>
								Upto 4000
							</label>
						</div>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='radio'
								name='inlineRadioOptions'
								id='inlineRadio1'
								value='option1'
							/>
							<label class='form-check-label' for='inlineRadio1'>
								Upto 5000
							</label>
						</div>
					</div>
				</div>
				<div className={`${classes.content} `}>
					<div className={`${classes.card} shadow`}>
						<img src={saree} alt='' className='card-img-top' />
						<h5 className='m-1'>Brand 1 Saree</h5>
						<h5 className='text-danger'>&#8377;1000</h5>
						<button className='btn btn-outline-success'>
							Add to Cart <i class='fas fa-shopping-cart'></i>
						</button>
					</div>
					<div className={`${classes.card} shadow`}>
						<img src={shirt} alt='' className='card-img-top' />
						<h5 className='m-1'>Brand 1 Saree</h5>
						<h5 className='text-danger'>&#8377;1000</h5>
						<button className='btn btn-outline-success'>
							Add to Cart <i class='fas fa-shopping-cart'></i>
						</button>
					</div>
					<div className={`${classes.card} shadow`}>
						<img src={pant} alt='' className='card-img-top' />
						<h5 className='m-1'>Brand 1 Saree</h5>
						<h5 className='text-danger'>&#8377;1000</h5>
						<button className='btn btn-outline-success'>
							Add to Cart <i class='fas fa-shopping-cart'></i>
						</button>
					</div>
					<div className={`${classes.card} shadow `}>
						<img src={saree} alt='' className='card-img-top' />
						<h5 className='m-1'>Brand 1 Saree</h5>
						<h5 className='text-danger'>&#8377;2000</h5>
						<button className='btn btn-outline-success'>
							Add to Cart <i class='fas fa-shopping-cart'></i>
						</button>
					</div>
					<div className={`${classes.card} shadow`}>
						<img src={saree} alt='' className='card-img-top' />
						<h5 className='m-1'>Brand 1 Saree</h5>
						<h5 className='text-danger'>&#8377;3000</h5>
						<button className='btn btn-outline-success'>
							Add to Cart <i class='fas fa-shopping-cart'></i>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
