import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div>Profile page</div>
		</div>
	);
};

export default Profile;
