import React from "react";
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

export default HabitantDetails;
