import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const LogoutPage = ({ show, handleClose, logout }) => {
	const handleLogout = () => {
		logout();
	};
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Logout</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>You are going to logout from the application.</p>
				<p>Do you want to continue?</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cancel
				</Button>
				<Button variant='primary' onClick={handleLogout}>
					Logout
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

LogoutPage.propTypes = {
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

export default connect(
	() => ({}),
	{ ...authActions }
)(LogoutPage);
