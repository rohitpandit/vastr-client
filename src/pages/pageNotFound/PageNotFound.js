import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './PageNotFound.module.css';

const PageNotFound = () => {
	return (
		<div>
			<Navbar />
			<div className={classes.content}>
				<h1>404!</h1>
				<h2>Page Not Found </h2>
			</div>
		</div>
	);
};

export default PageNotFound;
