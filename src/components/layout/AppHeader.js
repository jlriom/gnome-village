import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppHeader = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<div className='container'>
				<Navbar.Brand as={Link} to='/'>
					Brastlewark village
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav>
						<Nav.Link as={Link} to='/dashboard'>
							Dashboard
						</Nav.Link>
						<Nav.Link as={Link} to='/brastlewark'>
							Search Habitants
						</Nav.Link>
						<Nav.Link as={Link} to='/user/myprofile'>
							My Profile
						</Nav.Link>
						<Nav.Link as={Link} to='/user/register'>
							Register
						</Nav.Link>
						<Nav.Link as={Link} to='/user/unregister'>
							Unregister
						</Nav.Link>
						<Nav.Link as={Link} to='/about'>
							About
						</Nav.Link>{" "}
						<Nav.Link as={Link} to='/auth/login'>
							Login
						</Nav.Link>
						<Nav.Link as={Link} to='/auth/logout'>
							Logout
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default AppHeader;
