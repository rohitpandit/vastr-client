import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Profile.module.css';

const Profile = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('test@test.com');
	const [address, setAddress] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		toast.success('Profile updated successfully');
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<ToastContainer />
			<div className={`${classes.main} container shadow`}>
				<div className='d-flex justify-content-center'>
					<i className='far fa-user fa-5x m-auto p-4 text-white bg-dark border rounded-circle'></i>
				</div>

				<h1>Profile</h1>
				<hr />
				<form onSubmit={onSubmit}>
					<input
						type='text'
						className='form-control my-4'
						disabled
						value={email}
					/>
					<input
						type='text'
						className='form-control my-4'
						placeholder='Enter your name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type='text'
						className='form-control my-4'
						placeholder='Enter your address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<button type='submit' className='btn btn-outline-success '>
						Update
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Profile;
