import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	registerUser,
	loadHabitantsProfessions,
	loadHabitantsHairColors
} from "../../store/actions/userActions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = ({
	professions,
	hairColors,
	error,
	show,
	handleClose,
	registerUser,
	loadHabitantsProfessions,
	loadHabitantsHairColors
}) => {
	const [values, setValues] = useState({
		name: "",
		thumbnail: "",
		age: 0,
		weight: 0,
		height: 0,
		hairColor: "",
		professions: []
	});

	useEffect(() => {
		loadHabitantsProfessions();
	}, [loadHabitantsProfessions]);

	useEffect(() => {
		loadHabitantsHairColors();
	}, [loadHabitantsHairColors]);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleRegister = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			registerUser({
				name: values.name,
				thumbnail: values.thumbnail,
				age: values.age,
				weight: values.weight,
				height: values.height,
				hair_color: values.hairColor,
				professions: values.professions
			});
		}
	};

	return (
		<Modal show={show} onHide={handleClose} size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>Register</Modal.Title>
			</Modal.Header>
			<Form onSubmit={handleRegister}>
				<Modal.Body>
					<div className='container'>
						<div className='row'>
							<div className='col-9'>
								<div className='row'>
									<div className='col-12'>
										<Form.Group controlId='name'>
											<Form.Label>Name</Form.Label>
											<Form.Control
												type='text'
												name='name'
												placeholder='Name'
												value={values.name}
												onChange={handleInputChange}
												required={true}
											/>
										</Form.Group>
									</div>
								</div>
								<div className='row'>
									<div className='col-12'>
										<Form.Group controlId='thumbnail'>
											<Form.Label>Photo</Form.Label>
											<Form.Control
												type='url'
												name='thumbnail'
												placeholder='Photo'
												value={values.thumbnail}
												onChange={handleInputChange}
												required={true}
											/>
										</Form.Group>
									</div>
								</div>
								<div className='row'>
									<div className='col-4'>
										<Form.Group controlId='age'>
											<Form.Label>Age</Form.Label>
											<Form.Control
												type='number'
												name='age'
												placeholder='Age'
												value={values.age}
												onChange={handleInputChange}
												required={true}
											/>
										</Form.Group>
									</div>
									<div className='col-4'>
										<Form.Group controlId='weight'>
											<Form.Label>Weight</Form.Label>
											<Form.Control
												type='number'
												name='weight'
												placeholder='Weight'
												value={values.weight}
												onChange={handleInputChange}
												required={true}
											/>
										</Form.Group>
									</div>
									<div className='col-4'>
										<Form.Group controlId='height'>
											<Form.Label>Height</Form.Label>
											<Form.Control
												type='number'
												name='height'
												placeholder='Height'
												value={values.height}
												onChange={handleInputChange}
												required={true}
											/>
										</Form.Group>
									</div>
								</div>
							</div>
							<div className='col-3'>
								<div className='row'>
									<div className='col-12'>
										<Form.Group controlId='exampleForm.ControlSelect2'>
											<Form.Label>Hair Color</Form.Label>
											<Form.Control as='select'>
												{hairColors.map(hairColors => (
													<option value={hairColors}>{hairColors}</option>
												))}
											</Form.Control>
										</Form.Group>
									</div>
								</div>
								<div className='row'>
									<div className='col-12'>
										<Form.Group controlId='exampleForm.ControlSelect2'>
											<Form.Label>Professions</Form.Label>
											<Form.Control as='select' multiple>
												{professions.map(profession => (
													<option value={profession}>{profession}</option>
												))}
											</Form.Control>
										</Form.Group>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>

				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						Register
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

const mapStateToProps = state => ({
	professions: state.user.professions,
	hairColors: state.user.hairColors,
	error: state.user.error
});

export default connect(
	mapStateToProps,
	{ registerUser, loadHabitantsProfessions, loadHabitantsHairColors }
)(RegisterPage);
