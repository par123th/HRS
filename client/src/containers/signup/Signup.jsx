import React from 'react';
import './signup.css';
import { Navbar, CTAButton } from './../../components';

const Signup = () => {
	return (
		<div className="signup-page">
			<Navbar />
			<div className="signup">
				<input
					className="input"
					id="email"
					type="text"
					placeholder="Email ID"
				/>
				<input
					className="input"
					id="firstname"
					type="text"
					placeholder="First Name"
				/>
				<input
					className="input"
					id="lastname"
					type="text"
					placeholder="Last Name"
				/>
				<input
					className="input"
					id="username"
					type="text"
					placeholder="Create Username"
				/>
				<input
					className="input"
					id="password"
					type="password"
					placeholder="Create Password"
				/>
				<a href="/login">
					<CTAButton text="Sign Up" />
				</a>
				<p className="signup-desc">
					Already have an account - <a href="/login">Log In Here</a>
				</p>
			</div>
		</div>
	);
};

export default Signup;
