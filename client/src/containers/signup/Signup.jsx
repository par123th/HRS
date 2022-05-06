import React from 'react';
import './signup.css';
import { Navbar, CTAButton } from './../../components';
import firebase from 'firebase/compat/app';
import { auth } from '../../firebase'
import '../../components/ctabutton/ctabutton.css'
import { useRef } from 'react';


const Signup = () => {
	const emailRef = useRef('')
	const pwdRef = useRef('')

	const signup = (e) => {
		e.preventDefault()
		auth.createUserWithEmailAndPassword(
			emailRef.current.value,
			pwdRef.current.value
		).then((authUser) => {
		alert('User created !!')
		})
		.catch((error) => {
			alert(error.message)
		})
	}

	return (
		<div className="signup-page">
			<Navbar />
			<div className="signup">
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
				<a href="/login">
				<button type="submit" className="cta-button" onClick={signup}>Sign Up</button>
				</a>
				<p className="signup-desc">
					Already have an account - <a href="/login">Log In Here</a>
				</p>
			</div>
		</div>
	);
};

export default Signup;
