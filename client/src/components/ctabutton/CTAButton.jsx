import React from 'react';
import './ctabutton.css';
import axios from 'axios';

const CTAButton = ({text}) => {
    const fetchData = (text) => {
        console.log(text)
        axios.get('http://localhost:8000/getresult/')
            .then(res => {
          
                console.log('how are you')
            })
            .catch(err => {console.log(err)})
		}
	
	return (
		<button type="submit" className="cta-button" onClick={() => {fetchData(text)}}>Search</button>
    )
}

export default CTAButton;
