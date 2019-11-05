import React from "react";
import { connect } from "react-redux";
import {
	registerUser,
	loadHabitantsProfessions,
	loadHabitantsHairColors,
	loadProfile
} from "../../store/actions/userActions";
import HabitantDetailsEdit from "../../components/HabitantDetailsEdit";

const RegisterPage = ({
	profile,
	professions,
	hairColors,
	error,
	show,
	handleClose,
	loadProfile,
	loadHabitantsProfessions,
	loadHabitantsHairColors,
	registerUser
}) => {
	return (
		<HabitantDetailsEdit
			mode={{ mode: "create", title: "Register", submitCaption: "Register" }}
			profile={profile}
			professions={professions}
			hairColors={hairColors}
			show={show}
			handleClose={handleClose}
			loadProfile={loadProfile}
			loadHabitantsProfessions={loadHabitantsProfessions}
			loadHabitantsHairColors={loadHabitantsHairColors}
			registerUser={registerUser}
		/>
	);
};

const mapStateToProps = state => ({
	profile: state.user.profile,
	professions: state.user.professions,
	hairColors: state.user.hairColors,
	error: state.user.error
});

export default connect(
	mapStateToProps,
	{
		loadProfile,
		loadHabitantsProfessions,
		loadHabitantsHairColors,
		registerUser
	}
)(RegisterPage);
