import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";
import PageLayout from "../../components/layout/PageLayout";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DEFAULT_USER = "Tobus Quickwhistle";

const LoginPage = ({ show, handleClose, login }) => {
	const [userName, setUserName] = useState(DEFAULT_USER);

	const handleChange = e => {
		setUserName(e.target.value);
	};
	const handleLogin = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			login(userName);
		}
	};

	return (
		<PageLayout>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Form onSubmit={handleLogin}>
					<Modal.Body>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type='text'
								placeholder='User name'
								value={userName}
								onChange={handleChange}
								required={true}
							/>
							<Form.Text className='text-muted'>
								<i className='pi pi-info-circle'></i>
								No pasword required.
								<br />
								You can login with 'guest' user or using the name of any
								Brastlewark's habitant.
							</Form.Text>
						</Form.Group>
					</Modal.Body>

					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Cancel
						</Button>
						<Button variant='primary' type='submit'>
							Login
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</PageLayout>
	);
};

export default connect(
	() => ({}),
	{ login }
)(LoginPage);
