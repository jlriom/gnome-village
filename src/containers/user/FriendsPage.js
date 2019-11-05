import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProfile, loadFriends } from "../../store/actions/userActions";
import HabitantDetails from "../../components/HabitantDetails";

const FriendsPage = ({ id, profile, friends, loadProfile, loadFriends }) => {
	useEffect(() => {
		loadProfile(id);
	}, [loadProfile, id]);

	useEffect(() => {
		loadFriends(id);
	}, [loadFriends, id]);

	return <HabitantDetails profile={profile} friends={friends} />;
};

const mapStateToProps = state => ({
	id: state.auth.id,
	profile: state.user.profile,
	friends: state.user.friends
});

export default connect(
	mapStateToProps,
	{ loadProfile, loadFriends }
)(FriendsPage);
