import React from 'react';
import loading from './loading.gif';
import classes from './Loading.module.css';

const Loading = () => {
	return (
		<div className={classes.loading}>
			<img src={loading} alt='' className={classes.image} />
		</div>
	);
};

export default Loading;
