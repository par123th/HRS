import React from 'react';
import './user.css';
import { CTAButton } from '../../components';

const User = ({
	firstName = 'Parth',
	lastName = 'Namdev',
	email = 'par123th@gmail.com',
	username = 'par123th'
}) => {
	return (
		<div className="user-page">
			<h1>Profile Page</h1>
			<div className="round" />
			<div className="details-wrap">
				<div className="first">
					<p className="tag">First Name:</p>
					<p className="value">{firstName}</p>
				</div>
				<div className="last">
					<p className="tag">Last Name:</p>
					<p className="value">{lastName}</p>
				</div>
				<div className="username">
					<p className="tag">Username:</p>
					<p className="value">{username}</p>
				</div>
				<div className="email">
					<p className="tag">Email:</p>
					<p className="value">{email}</p>
				</div>
				<div className="history">
					<h3>Search History</h3>
					<p className="item">India</p>
				</div>
			</div>
			<a href="/">
				<CTAButton text="Logout" />
			</a>
		</div>
	);
};

export default User;
