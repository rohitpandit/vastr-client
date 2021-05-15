import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar/Navbar';
import classes from './Signup.module.css';
import Loading from '../../components/loading/Loading';
import { signup } from '../../actions/authAction';

const Signup = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		if (props.authError) {
			toast.error(props.authError);
		}

		if (props.authSuccess) {
			props.history.push('/');
		}
	}, [props.authError, props.authSuccess]);

	const onSubmit = (e) => {
		e.preventDefault();

		//removing spaces from email and password
		setEmail((email) => email.trim());
		setPassword((password) => password.trim());
		setConfirmPassword((confirmPassword) => confirmPassword.trim());

		if (!email || !password || !confirmPassword) {
			toast.error('Enter all the entries');
			return;
		}

		if (password !== confirmPassword) {
			toast.error('Passwords did not match');
			return;
		}

		props.signup({ email, password });
	};

	const togglePassword = () => {
		setShowPassword((state) => !state);
	};

	return (
		<div className={classes.page}>
			<Navbar />
			<ToastContainer />
			{props.authLoading && <Loading />}
			<div className='p-5'>
				<div className='container bg-white p-3 w-50 shadow '>
					<div className='d-flex justify-content-center'>
						<i class='far fa-user fa-5x m-auto p-4 text-white bg-dark border rounded-circle'></i>
					</div>
					<h2 className='text-center'>Signup</h2>
					<hr />
					<form className='p-3' onSubmit={onSubmit}>
						<input
							type='email'
							className='form-control my-3'
							placeholder='example@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<div className={classes.password}>
							<input
								type={showPassword ? 'text' : 'password'}
								className={`form-control my-3  `}
								placeholder='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								minLength='6'
							/>
							{showPassword ? (
								<i
									className={`fas fa-eye  my-3 ${classes.eye}`}
									onClick={togglePassword}
								/>
							) : (
								<i
									className={`fas fa-eye-slash my-3   ${classes.eye}`}
									onClick={togglePassword}
								/>
							)}
						</div>
						<input
							type='password'
							className='form-control my-3'
							placeholder='confirm Password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							minLength='6'
						/>
						<button type='submit' className='btn btn-success btn-block'>
							Signup
						</button>
					</form>
					<p className='text-center'>
						Already registered? <Link to='/login'>Login here!</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	authLoading: state.auth.loading,
	authSuccess: state.auth.success,
	authError: state.auth.error,
	authtoken: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
	signup: (userInfo) => dispatch(signup(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
