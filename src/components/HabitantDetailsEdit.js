import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { defaultProfile } from "../store/state/profileState";

const HabitantDetailsEdit = ({
	id,
	mode,
	profile,
	professions,
	hairColors,
	show,
	handleClose,
	loadHabitantsProfessions,
	loadHabitantsHairColors,
	loadProfile,
	registerUser,
	saveProfile
}) => {
	const [values, setValues] = useState(defaultProfile);

	useEffect(() => {
		loadHabitantsProfessions();
	}, [loadHabitantsProfessions]);

	useEffect(() => {
		loadHabitantsHairColors();
	}, [loadHabitantsHairColors]);

	useEffect(() => {
		if (!isNaN(id)) {
			loadProfile(id);
		} else {
			loadProfile(null);
		}
	}, [loadProfile, id]);

	useEffect(() => {
		if (profile) setValues({ ...profile, hairColor: profile.hair_color });
	}, [profile]);

	const handleStringInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};
	const handleNumberInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onChangeProfessions = (value, { action, removedValue }) => {
		setValues({ ...values, professions: value.map(v => v.value) });
	};

	const onChangeHairColor = (value, { action, removedValue }) => {
		setValues({ ...values, hairColor: value.value });
	};

	const handleOnSubmit = event => {
		const form = event.currentTarget;
		event.preventDefault();
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			if (!validate(values)) {
				event.stopPropagation();
				return;
			}
			if (registerUser) {
				registerUser({
					name: values.name,
					thumbnail: values.thumbnail,
					age: parseFloat(values.age),
					weight: parseFloat(values.weight),
					height: parseFloat(values.height),
					hair_color: values.hairColor,
					professions: values.professions
				});
			} else if (saveProfile) {
				saveProfile({
					id: values.id,
					name: values.name,
					thumbnail: values.thumbnail,
					age: parseFloat(values.age),
					weight: parseFloat(values.weight),
					height: parseFloat(values.height),
					hair_color: values.hairColor,
					professions: values.professions
				});
			}
			handleClose();
		}
	};

	const validate = ({ name, thumbnail, age, weight, height }) => {
		let errorList = [];

		if (name.trim() === "") {
			errorList.push("Name is required");
		}
		if (thumbnail.trim() === "") {
			errorList.push("Photo is required");
		}
		if (age <= 0) {
			errorList.push("Age has to be > 0");
		}
		if (weight <= 0) {
			errorList.push("Weight has to be > 0");
		}
		if (height <= 0) {
			errorList.push("Height has to be > 0");
		}

		if (errorList.length > 0) {
			alert(errorList.join("\n"));
			return false;
		}
		return true;
	};

	return (
		<>
			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title> {mode.title}</Modal.Title>
				</Modal.Header>
				<Form onSubmit={handleOnSubmit}>
					<Modal.Body>
						<div className='container'>
							<div className='row'>
								<div className='col-12'>
									<Form.Group controlId='name'>
										<Form.Label>Name</Form.Label>
										<Form.Control
											type='text'
											name='name'
											placeholder='Name'
											value={values.name}
											onChange={handleStringInputChange}
											required={true}
											disabled={!isNaN(id) ? "disabled" : ""}
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
											onChange={handleStringInputChange}
											required={true}
										/>
									</Form.Group>
								</div>
							</div>
							<div className='row'>
								<div className='col-3'>
									<Form.Group controlId='age'>
										<Form.Label>Age</Form.Label>
										<Form.Control
											type='number'
											name='age'
											placeholder='Age'
											value={values.age}
											onChange={handleNumberInputChange}
											required={true}
										/>
									</Form.Group>
								</div>
								<div className='col-3'>
									<Form.Group controlId='weight'>
										<Form.Label>Weight</Form.Label>
										<Form.Control
											type='number'
											name='weight'
											placeholder='Weight'
											value={values.weight}
											onChange={handleNumberInputChange}
											required={true}
										/>
									</Form.Group>
								</div>
								<div className='col-3'>
									<Form.Group controlId='height'>
										<Form.Label>Height</Form.Label>
										<Form.Control
											type='number'
											name='height'
											placeholder='Height'
											value={values.height}
											onChange={handleNumberInputChange}
											required={true}
										/>
									</Form.Group>
								</div>
								<div className='col-3'>
									<Form.Group controlId='hairColors'>
										<Form.Label>Hair Color</Form.Label>
										<Select
											onChange={onChangeHairColor}
											defaultValue={{
												value: values.hairColor,
												label: values.hairColor
											}}
											options={hairColors.map(hairColor => {
												return { value: hairColor, label: hairColor };
											})}></Select>
									</Form.Group>
								</div>
							</div>
							<div className='row'>
								<div className='col-12'>
									<Form.Group controlId='professions'>
										<Form.Label>Professions</Form.Label>
										<Select
											isMulti
											onChange={onChangeProfessions}
											defaultValue={values.professions.map(p => {
												return { value: p, label: p };
											})}
											options={professions.map(p => {
												return { value: p, label: p };
											})}></Select>
									</Form.Group>
								</div>
							</div>
						</div>
					</Modal.Body>

					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Cancel
						</Button>
						<Button variant='primary' type='submit'>
							{mode.submitCaption}
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};

HabitantDetailsEdit.propTypes = {
	id: PropTypes.number,
	mode: PropTypes.object.isRequired,
	profile: PropTypes.object,
	professions: PropTypes.array.isRequired,
	hairColors: PropTypes.array.isRequired,
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	loadHabitantsProfessions: PropTypes.func.isRequired,
	loadHabitantsHairColors: PropTypes.func.isRequired,
	loadProfile: PropTypes.func.isRequired,
	registerUser: PropTypes.func,
	saveProfile: PropTypes.func
};

export default HabitantDetailsEdit;
