import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import * as appActions from "../../store/actions/appActions";

import HabitantDetailsEdit from "../../components/HabitantDetailsEdit";

const RegisterPage = ({
	profile,
	professions,
	hairColors,
	show,
	handleClose,
	loadProfile,
	loadHabitantsProfessions,
	loadHabitantsHairColors,
	registerUser,
	showError
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
			showError={showError}
		/>
	);
};

RegisterPage.propTypes = {
	profile: PropTypes.object,
	professions: PropTypes.array.isRequired,
	hairColors: PropTypes.array.isRequired,
	show: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	loadProfile: PropTypes.func.isRequired,
	loadHabitantsProfessions: PropTypes.func.isRequired,
	loadHabitantsHairColors: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
	showError: PropTypes.func
};

const mapStateToProps = state => ({
	profile: state.user.profile,
	professions: state.user.professions,
	hairColors: state.user.hairColors,
	error: state.user.error
});

export default connect(
	mapStateToProps,
	{ ...userActions, ...appActions }
)(RegisterPage);
