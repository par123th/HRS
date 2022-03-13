import React from 'react';
import './landing.css';

import { Navbar } from './../../components';

const Landing = () => {
	return (
		<div className="landing-page">
			<Navbar />
			<header
				style={{
					backgroundImage: `url(${process.env.PUBLIC_URL +
						'/landing.jpg'})`
				}}
			>
				<h1 className="tagline">
					Once a year go someplace you've never been before.
				</h1>
				<div className="search-bar">
					<input
						type="text"
						placeholder="Look up for a hotel, location, country"
					/>
					<button>Search</button>
				</div>
				{/* Search bar */}
			</header>
			<main>
				{/* Services */}
				<div className="services">
					<h2>Our Services</h2>
				</div>
			</main>
		</div>
	);
};

export default Landing;