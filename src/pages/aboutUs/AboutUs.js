import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import classes from './AboutUs.module.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
	return (
		<div className={classes.page}>
			<Navbar />
			<div className={`${classes.content} container shadow`}>
				<h1>About Vastr</h1>
				<hr />
				<div className='px-5'>
					<h2>Fashion at your fingertips</h2>
					<h4>Thousands of happy customers served every month.</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						eaque totam, aperiam sapiente obcaecati perspiciatis ut laborum
						tempora nesciunt nobis id cupiditate illo! Nulla dolorum voluptate
						perspiciatis aspernatur aliquid quam. Lorem ipsum dolor, sit amet
						consectetur adipisicing elit. Rerum maiores, deserunt facilis fuga
						temporibus voluptates commodi aliquid earum consequuntur. Omnis!
					</p>
					<h5>
						Got some queries? <Link to='/contact'>Contact Us</Link>
					</h5>
					<h6>
						Check out the{' '}
						<a
							target='_blank'
							href='https://github.com/rohitpandit0311/vastr-client'>
							Code
						</a>
					</h6>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AboutUs;
