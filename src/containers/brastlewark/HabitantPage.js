import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { loadProfile, loadFriends } from "../../store/actions/userActions";
import HabitantDetails from "../../components/HabitantDetails";

const HabitantPage = ({ id, profile, friends, loadProfile, loadFriends }) => {
	let { name } = useParams();

	useEffect(() => {
		loadProfile(name);
	}, [loadProfile, name]);

	useEffect(() => {
		loadFriends(name);
	}, [loadFriends, name]);

	return <HabitantDetails profile={profile} friends={friends} />;
};

const mapStateToProps = state => ({
	id: state.user.id,
	profile: state.user.profile,
	friends: state.user.friends
});

export default connect(
	mapStateToProps,
	{ loadProfile, loadFriends }
)(HabitantPage);
