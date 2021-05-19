import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
	const admin = useSelector((state) => state.auth.admin);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (admin) {
					return <Component {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default AdminProtectedRoute;
