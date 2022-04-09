import React from 'react';
import { Landing, Login, Signup, User } from './containers';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/user" element={<User />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
