import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar';
import classes from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		//removing spaces from email and password
		setEmail((email) => email.trim());
		setPassword((password) => password.trim());

		if (!email || !password) {
			toast.error('Enter email and password');
		}

		return;
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<ToastContainer />
			<div className='container bg-white p-3 w-50 shadow'>
				<div className='d-flex justify-content-center'>
					<i class='far fa-user fa-5x m-auto p-4 text-white bg-dark border rounded-circle'></i>
				</div>
				<h2 className='text-center'>Login</h2>
				<hr />
				<form className='p-3' onSubmit={onSubmit}>
					<input
						type='email'
						className='form-control my-3'
						placeholder='example@example.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type='password'
						className='form-control my-3'
						placeholder='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type='submit' className='btn btn-success btn-block'>
						Login
					</button>
				</form>
				<p className='text-center'>
					New user? <Link to='/signup'>Register here!</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
