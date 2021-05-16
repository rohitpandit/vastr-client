import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='bg-light shadow  p-3'>
			<div className=' d-flex justify-content-around'>
				<Link to='/about'>About Us</Link>
				<Link to='/contact'>contact Us</Link>
			</div>
			<p className='text-center'>All rights Reserverd</p>
		</div>
	);
};

export default Footer;
