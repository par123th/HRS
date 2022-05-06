import React from 'react';
import './login.css';
import { Navbar, CTAButton } from './../../components';
import '../../components/ctabutton/ctabutton.css'
import { useRef } from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase'

const Login = () => {
	const emailRef = useRef('')
	const pwdRef = useRef('')

	const login = (e) => {
		//e.preventDefault()
		auth.signInWithEmailAndPassword(
            emailRef.current.value,
            pwdRef.current.value
        ).then((authUser) => {
            alert('Logged In!!')
        }).catch((error) => alert(error.message))
	}

	const logout = (e) => {
		//e.preventDefault()
		auth.signOut()
		alert('Logged Out!!')

	}

	return (
		<div className="login-page">
			<Navbar />
			<div className="login">
				<input
					className="input"
					id="username"
					type="text"
					placeholder="Email"
					ref={emailRef}
				/>
				<input
					className="input"
					id="password"
					type="password"
					placeholder="Password"
					ref={pwdRef}
				/>
				<a href="/">
				<button type="submit" className="cta-button" onClick={login}>Login</button>
				</a>
				<a href="/">
				<button type="submit" className="cta-button" onClick={logout}>Logout</button>
				</a>
				<p className="signup-desc">
					Create an account - <a href="/signup">Sign Up Here</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
