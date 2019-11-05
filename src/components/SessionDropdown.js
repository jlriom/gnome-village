import React, { useState } from "react";
import history from "../shared/history";
import { NavDropdown } from "react-bootstrap";
import LogoutPage from "../containers/auth/LogoutPage";
import MyProfilePage from "../containers/user/MyProfilePage";
import UnRegisterPage from "../containers/user/UnRegisterPage";

const SessionDropdown = ({ auth }) => {
	const [showMyProfilePage, setShowMyProfilePage] = useState(false);
	const [showLogoutPage, setShowLogoutPage] = useState(false);
	const [showUnregisterPage, setShowUnregisterPage] = useState(false);

	return (
		<>
			<MyProfilePage
				show={showMyProfilePage}
				handleClose={() => setShowMyProfilePage(false)}></MyProfilePage>
			<LogoutPage
				show={showLogoutPage}
				handleClose={() => setShowLogoutPage(false)}></LogoutPage>

			<UnRegisterPage
				show={showUnregisterPage}
				handleClose={() => setShowUnregisterPage(false)}></UnRegisterPage>

			<NavDropdown title={auth.username} id='basic-nav-dropdown'>
				{!auth.isGuest && (
					<NavDropdown.Item onClick={() => setShowMyProfilePage(true)}>
						My profile
					</NavDropdown.Item>
				)}

				{!auth.isGuest && (
					<NavDropdown.Item
						onClick={() => history.push(`/brastlewark/${auth.id}`)}>
						My Friends
					</NavDropdown.Item>
				)}

				{!auth.isGuest && (
					<NavDropdown.Item onClick={() => setShowUnregisterPage(true)}>
						Unregister my profile
					</NavDropdown.Item>
				)}
				{!auth.isGuest && <NavDropdown.Divider />}
				<NavDropdown.Item onClick={() => setShowLogoutPage(true)}>
					Logout
				</NavDropdown.Item>
			</NavDropdown>
		</>
	);
};

export default SessionDropdown;
