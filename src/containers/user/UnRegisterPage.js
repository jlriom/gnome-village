import React from "react";
import { connect } from "react-redux";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UnRegisterPage = ({ show, handleClose }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Unregister</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Unregister</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cancel
				</Button>
				<Button variant='primary'>Save</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default connect(() => ({}))(UnRegisterPage);
