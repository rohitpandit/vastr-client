import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Profile.module.css';
import { getUser, postUser } from '../../actions/userAction';

const Profile = (props) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('test@test.com');
	const [address, setAddress] = useState('');

	useEffect(() => {
		props.getUser();
	}, []);

	useEffect(() => {
		if (props.userError) {
			toast.error(props.userError);
		}
		if (props.userSuccess) {
			toast.success('updated successfully');
		}
	}, [props]);

	const onSubmit = (e) => {
		e.preventDefault();

		props.postUser({ name, address });
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

const mapStateToProps = (state) => ({
	userLoading: state.user.laoding,
	userError: state.user.error,
	userSuccess: state.user.success,
	user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
	getUser: () => dispatch(getUser()),
	postUser: (userInfo) => dispatch(postUser(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
