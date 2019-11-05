import React from "react";
import { connect } from "react-redux";
import {
	saveProfile,
	loadHabitantsProfessions,
	loadHabitantsHairColors,
	loadProfile
} from "../../store/actions/userActions";
import HabitantDetailsEdit from "../../components/HabitantDetailsEdit";

const MyProfilePage = ({
	id,
	profile,
	professions,
	hairColors,
	error,
	show,
	handleClose,
	loadProfile,
	loadHabitantsProfessions,
	loadHabitantsHairColors,
	saveProfile
}) => {
	return (
		<HabitantDetailsEdit
			mode={{ mode: "edit", title: "My profile", submitCaption: "Save" }}
			id={id}
			profile={profile}
			professions={professions}
			hairColors={hairColors}
			show={show}
			handleClose={handleClose}
			loadProfile={loadProfile}
			loadHabitantsProfessions={loadHabitantsProfessions}
			loadHabitantsHairColors={loadHabitantsHairColors}
			saveProfile={saveProfile}
		/>
	);
};

const mapStateToProps = state => ({
	id: state.auth.id,
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
		saveProfile
	}
)(MyProfilePage);
