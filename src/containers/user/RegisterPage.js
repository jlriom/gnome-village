import React from "react";
import { connect } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const RegisterPage = ({ show, handleClose }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Register</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Register</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cancel
				</Button>
				<Button variant='primary'>Register</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default connect(() => ({}))(RegisterPage);
