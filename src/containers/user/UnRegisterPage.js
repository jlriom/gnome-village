import React from "react";
import { connect } from "react-redux";
import { unRegisterme } from "../../store/actions/userActions";
import { logout } from "../../store/actions/authActions";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UnRegisterPage = ({
	id,
	name,
	unRegisterme,
	logout,
	show,
	handleClose
}) => {
	const handleUnregister = () => {
		unRegisterme(id);
		logout();
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Unregister my profile</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>
					You are going to unregister your user <strong>({name}) </strong> from
					the application.
				</p>
				<p>
					<strong>Do you want to continue?</strong>
				</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant='secondary' onClick={handleClose}>
					Cancel
				</Button>
				<Button variant='primary' onClick={handleUnregister}>
					{" "}
					Yes, unregister my profile
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
const mapStateToProps = state => ({
	id: state.auth.id,
	name: state.auth.username
});
export default connect(
	mapStateToProps,
	{ logout, unRegisterme }
)(UnRegisterPage);
