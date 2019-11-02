import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchHabitants } from "../../store/actions/searchActions";
import PageLayout from "../../components/layout/PageLayout";
import HabitantItem from "../../components/HabitantItem";

const SearchPage = ({
	searchCriteria,
	habitantList,
	total,
	error,
	searchHabitants
}) => {
	useEffect(() => {
		searchHabitants(searchCriteria);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageLayout>
			{"Total: " + total} <br />
			{habitantList && (
				<ul>
					{habitantList.map(habitant => (
						<HabitantItem key={habitant.id} habitant={habitant}></HabitantItem>
					))}
				</ul>
			)}
		</PageLayout>
	);
};

const mapStateToProps = state => ({
	searchCriteria: state.search.searchCriteria,
	habitantList: state.search.list,
	total: state.search.total,
	error: state.search.error
});

export default connect(
	mapStateToProps,
	{ searchHabitants }
)(SearchPage);
