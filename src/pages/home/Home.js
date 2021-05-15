import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';
import shirt from './shirt.jpg';
import pant from './pant.jpg';
import saree from './saree.jpg';

const Home = (props) => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div className={classes.head}>
				<h1 className='text-white shadow'>Clothes brings Happiness</h1>
			</div>
			<div className='container d-flex flex-column my-3'>
				<div
					className={classes.pant}
					onClick={() => {
						props.history.push('/products/pant');
					}}>
					<img src={pant} alt='pant' className='w-25' />
					<div className='info'>
						<h3 className='text-center'>Pants</h3>
						<p className='text-center'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
							a. Sapiente placeat dolorem rerum, accusamus culpa sint voluptatum
							soluta. Similique praesentium reprehenderit fuga fugit asperiores
							delectus possimus? Enim, sed dolor, excepturi architecto
							blanditiis voluptates neque cupiditate eaque ducimus soluta
							tenetur provident expedita consequatur veniam voluptatum earum
							laboriosam quibusdam placeat minus.
						</p>
					</div>
				</div>
				<div
					className={classes.shirt}
					onClick={() => {
						props.history.push('/products/shirt');
					}}>
					<img src={shirt} alt='shirt' className='w-25' />
					<div className='info'>
						<h3 className='text-center'>Shirt</h3>
						<p className='text-center'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
							a. Sapiente placeat dolorem rerum, accusamus culpa sint voluptatum
							soluta. Similique praesentium reprehenderit fuga fugit asperiores
							delectus possimus? Enim, sed dolor, excepturi architecto
							blanditiis voluptates neque cupiditate eaque ducimus soluta
							tenetur provident expedita consequatur veniam voluptatum earum
							laboriosam quibusdam placeat minus.
						</p>
					</div>
				</div>
				<div
					className={classes.saree}
					onClick={() => {
						props.history.push('/products/saree');
					}}>
					<img src={saree} alt='saree' className='w-25' />
					<div className='info'>
						<h3 className='text-center'>Saree</h3>
						<p className='text-center'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
							a. Sapiente placeat dolorem rerum, accusamus culpa sint voluptatum
							soluta. Similique praesentium reprehenderit fuga fugit asperiores
							delectus possimus? Enim, sed dolor, excepturi architecto
							blanditiis voluptates neque cupiditate eaque ducimus soluta
							tenetur provident expedita consequatur veniam voluptatum earum
							laboriosam quibusdam placeat minus.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
