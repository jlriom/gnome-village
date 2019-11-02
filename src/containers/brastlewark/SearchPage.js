import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchHabitants } from "../../store/actions/searchActions";
import PageLayout from "../../components/layout/PageLayout";

const SearchPage = ({ searchCriteria, habitants, error, searchHabitants }) => {
	useEffect(() => {
		searchHabitants(searchCriteria);
		console.log("searchCriteria", searchCriteria);
		console.log("habitants", habitants);
		console.log("error", error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <PageLayout>SearchPage</PageLayout>;
};

const mapStateToProps = state => ({
	searchCriteria: state.searchCriteria,
	habitantList: state.list,
	error: state.error
});

export default connect(
	mapStateToProps,
	{ searchHabitants }
)(SearchPage);
