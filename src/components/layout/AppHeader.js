import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutLinkPopup from "../LogoutLinkPopup";
import LoginLinkPopup from "../LoginLinkPopup";

import If from "../If";

const AppHeader = ({ auth }) => {
	console.log("auth", auth);
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
							<Nav.Link as={Link} to='/user/register'>
								Register
							</Nav.Link>
							<LoginLinkPopup />
						</If>
						<If condition={auth.isLoggedIn}>
							<If condition={!auth.isGuest}>
								<Nav.Link as={Link} to='/user/myprofile'>
									My Profile
								</Nav.Link>
								<Nav.Link as={Link} to='/user/unregister'>
									Unregister
								</Nav.Link>
							</If>
							<LogoutLinkPopup username={auth.username} />
						</If>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default AppHeader;
