import React from 'react';
import './ctabutton.css';

const CTAButton = ({ text = 'Search' }) => {
	return <button className="cta-button">{text}</button>;
};

export default CTAButton;
