import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProfile, loadFriends } from "../../store/actions/userActions";
import PageLayout from "../../components/layout/PageLayout";
import HabitantItem from "../../components/HabitantItem";
import HabitantCard from "../../components/HabitantCard";

const FriendsPage = ({ id, profile, friends, loadProfile, loadFriends }) => {
	useEffect(() => {
		loadProfile(id);
	}, [loadProfile, id]);

	useEffect(() => {
		loadFriends(id);
	}, [loadFriends, id]);

	return (
		<PageLayout headerText={profile && profile.name}>
			<div className='container'>
				<div className='row'>
					<div className='col-3'>
						<HabitantCard habitant={profile} />
					</div>
					<div className='col-9'>
						<h3 className='m-4'>Friends</h3>
						{friends.map(friend => {
							return <HabitantItem key={friend.id} habitant={friend} />;
						})}
						<br></br>
					</div>
				</div>
			</div>
		</PageLayout>
	);
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
