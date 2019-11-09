import React from "react";
import PropTypes from "prop-types";
import PageLayout from "./layout/PageLayout";
import HabitantItem from "./HabitantItem";
import HabitantCard from "./HabitantCard";

const HabitantDetails = ({ profile, friends }) => {
	return (
		<PageLayout headerText={profile && profile.name}>
			<div className='container'>
				<div className='row'>
					<div className='col-3'>
						<HabitantCard habitant={profile} />
					</div>
					<div className='col-9'>
						<h3 className='m-4'>Friends</h3>
						{friends &&
							friends.map(friend => {
								return (
									<HabitantItem
										key={friend.id}
										habitant={friend}
										manageFriends={false}
									/>
								);
							})}
						<br></br>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

HabitantDetails.propTypes = {
	profile: PropTypes.object.isRequired,
	friends: PropTypes.array.isRequired
};

export default HabitantDetails;
