import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
	return (
		<Navbar bg='light' expand='lg' fixed='bottom'>
			<div className='container justify-content-center'>
				© 2020 jlriom <i class='pi pi-github' /> <i class='fab fa-github'></i>
			</div>
		</Navbar>
	);
};

export default Footer;
