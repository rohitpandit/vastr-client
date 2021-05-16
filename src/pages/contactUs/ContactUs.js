import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './ContactUs.module.css';

const ContactUs = () => {
	const [email, setEmail] = useState('');
	const [query, setQuery] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		setQuery('');
		setEmail('');
		toast.success('Query sent successfully');
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<ToastContainer />
			<div className={`${classes.content} container shadow`}>
				<h1>Contact us</h1>
				<hr />
				<form className='px-5' onSubmit={onSubmit}>
					<input
						type='email'
						className='form-control my-2'
						placeholder='Enter your email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<textarea
						type='text'
						className='form-control my-2'
						rows='5'
						placeholder='your query'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						required
					/>
					<button className='btn  btn-outline-success m-3' type='submit'>
						Submit
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
