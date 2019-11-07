import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginLinkPopup from "../LoginLinkPopup";
import RegisterLinkPopup from "../RegisterLinkPopup";

import SessionDropdown from "../SessionDropdown";

import If from "../If";

const AppHeader = ({ auth }) => {
	return (
		<Navbar bg='light' expand='lg'>
			<div className='container'>
				<Navbar.Brand as={Link} to='/'>
					Brastlewark village
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<If condition={auth.isLoggedIn}>
							<Nav.Link as={Link} to='/dashboard'>
								Dashboard
							</Nav.Link>
							<Nav.Link as={Link} to='/brastlewark'>
								Search Habitants
							</Nav.Link>
						</If>
						<Nav.Link as={Link} to='/about'>
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav>
						<If condition={!auth.isLoggedIn}>
							<RegisterLinkPopup />
							<LoginLinkPopup />
						</If>
						<If condition={auth.isLoggedIn}>
							<SessionDropdown auth={auth} />
						</If>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

AppHeader.propTypes = {
	auth: PropTypes.object.isRequired
};

export default AppHeader;
