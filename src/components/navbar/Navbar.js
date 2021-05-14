import React from 'react';
import { NavLink } from 'react-router-dom';
import vastr from './vastrLogo.png';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={`navbar navbar-expand-lg navbar-light bg-light p-1`}>
			<div className='container-fluid'>
				<NavLink className='navbar-brand' to='/'>
					<img src={vastr} alt='logo' className={classes.logo} />
				</NavLink>
				<div className=' navbar-collapse'>
					<ul className='navbar-nav m-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<NavLink className='nav-link' exact to='/'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' exact to='/cart'>
								Cart
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' exact to='/profile'>
								Profile
							</NavLink>
						</li>
					</ul>
					<form className='d-flex'>
						<button className='btn btn-outline-success' type='submit'>
							login/logout
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
