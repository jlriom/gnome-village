import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const AppFooter = () => {
	return (
		<Navbar bg='light' expand='lg' fixed='bottom'>
			<div className='container justify-content-center'>
				<span className='mx-2'> 2020 - MIT License - jlriom - </span>
				<FontAwesomeIcon icon={faGithub} />
				<a
					className='mx-2'
					href='https://github.com/jlriom/gnome-village'
					target='_blank'
					rel='noopener noreferrer'>
					https://github.com/jlriom/gnome-village
				</a>
			</div>
		</Navbar>
	);
};

export default AppFooter;
