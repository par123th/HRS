import React from 'react';
import './login.css';
import { Navbar, CTAButton } from './../../components';

const Login = () => {
	return (
		<div className="login-page">
			<Navbar />
			<div className="login">
				<input
					className="input"
					id="username"
					type="text"
					placeholder="Username"
				/>
				<input
					className="input"
					id="password"
					type="password"
					placeholder="Password"
				/>
				<a href="/">
					<CTAButton text="Login" />
				</a>
				<p className="signup-desc">
					Create an account - <a href="/signup">Sign Up Here</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
