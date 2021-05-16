import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import './bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<ProtectedRoute exact path='/profile' component={Profile} />
					<ProtectedRoute exact path='/cart' component={Cart} />
					<Route exact path='/product' component={Product} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/contact' component={ContactUs} />
					<Route path='*' component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
