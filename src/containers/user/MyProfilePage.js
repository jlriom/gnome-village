import React from "react";
import { connect } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyProfilePage = ({ show, handleClose }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>My profile</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>My profile</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Exit
				</Button>
				<Button variant='primary'>Save</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default connect(() => ({}))(MyProfilePage);
