import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const AppHeader = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<div className='container'>
				<Navbar.Brand href='#home'>Gnomes Village</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav>
						<Nav.Link as={Link} to='/'>
							DashBoard
						</Nav.Link>
						<NavDropdown title='Gnomes' id='nav-dropdown'>
							<NavDropdown.Item to='/gnomes' as={Link}>
								Search Gnomes
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item to='/gnomes/new' as={Link}>
								New Gnome
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default AppHeader;
