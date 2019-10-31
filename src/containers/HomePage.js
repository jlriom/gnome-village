import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className='jumbotron'>
			<h2 className='display-4'>Welcome to Brastlewark village</h2>
			<p className='lead'>React web application demo</p>
			<hr className='my-4'></hr>
			<p>Go to About page to get started using the application</p>
			<Link to='/about' className='btn btn-primary btn-lg'>
				{" "}
				About...{" "}
			</Link>
		</div>
	);
};

export default HomePage;
