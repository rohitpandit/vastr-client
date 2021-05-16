import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<div className={`bg-light shadow ${classes.footer}`}>
			<div className=' d-flex justify-content-around m-1'>
				<Link to='/about'>About Us</Link>
				<Link to='/contact'>contact Us</Link>
			</div>
			<p className='text-center p-0 m-0'>
				copyright &#169; All rights Reserverd
			</p>
		</div>
	);
};

export default Footer;
