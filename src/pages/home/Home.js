import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Home.module.css';

const Home = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div>Home page</div>
		</div>
	);
};

export default Home;
