import React from 'react';
import './landing.css';
import { useRef } from 'react';
import '../../components/ctabutton/ctabutton.css'
import { Navbar, CTAButton } from './../../components';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Landing = () => {
	const [results, setResults] = useState(null);

	useEffect(() => {
	localStorage.setItem('results', JSON.stringify(results));
	}, [results]);

	const des = useRef('')
	const country = useRef('')
	const fetchData = (text,country) => {
        axios.post('http://localhost:8000/getresult/',JSON.stringify({
            "description":text,
			"country":country
        }))
            .then(res => {
                console.log(res.data)
				setResults(res.data)
            })
            .catch(err => {console.log(err)})
		}

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
					<div className="custom-select">
						<select ref={country} name="countries" id="countries">
							<option value="Austria">Austria</option>
							<option value="Spain">Spain</option>
							<option value="Netherlands">Netherlands</option>
							<option value="Italy">Italy</option>
							<option value="France">France</option>
						</select>
					</div>
					<input ref={des}
						className="search-bar-input"
						type="text"
						placeholder="Look up for a hotel, location, country"
					/>
					<a href="/search" target="_blank">
					<button type="submit" className="cta-button" onClick={() => {fetchData(des.current.value,country.current.value)}}>Search</button>
					</a>
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
