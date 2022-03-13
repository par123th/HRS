import React from 'react';
import './navbar.css';

const NavLinks = () => (
	<React.Fragment>
		<p>
			<a href="/">Home</a>
		</p>
		<p>
			<a href="/">Services</a>
		</p>
		<p>
			<a href="/">About</a>
		</p>
		<p>
			<a href="/">Contact Us</a>
		</p>
		<p>
			<a href="/login">Login</a>
		</p>
	</React.Fragment>
);

const Navbar = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-logo logo">
				<h3>safarr</h3>
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default Navbar;
