import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Admin from './pages/admin/Admin';
import './bootstrap.min.css';
import './App.css';
import Products from './pages/products/Products';

function App(props) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;

	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<ProtectedRoute exact path='/profile' component={Profile} />
					<ProtectedRoute exact path='/cart' component={Cart} />
					<ProtectedRoute exact path='/admin' component={Admin} />
					<Route exact path='/product' component={Product} />
					<Route exact path='/products/:type' component={Products} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/contact' component={ContactUs} />
					<Route path='*' component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(App);
