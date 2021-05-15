import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
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
					<Route exact path='/profile' component={Profile} />
					<Route exact path='/cart' component={Cart} />
					<Route exact path='/product' component={Product} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
