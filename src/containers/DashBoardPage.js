import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	loadHabitantsByHairColor,
	loadHabitantsByProfession
} from "../store/actions/statsActions";

import PageLayout from "../components/layout/PageLayout";

const DashBoardPage = ({
	habitantsByHairColor,
	habitantsByProfession,
	error,
	loadHabitantsByHairColor,
	loadHabitantsByProfession
}) => {
	useEffect(() => {
		loadHabitantsByHairColor();
		loadHabitantsByProfession();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// TODO error

	return (
		<PageLayout headerText='Dashboard'>
			<p>
				Total of Habitants:
				{habitantsByHairColor.reduce((total, current) => {
					return total + current.count;
				}, 0)}
			</p>
			<ul>
				{habitantsByHairColor.map(hairColor => (
					<li key={hairColor.hair_color}>
						{hairColor.hair_color}, count: {hairColor.count}
					</li>
				))}
			</ul>

			<ul>
				{habitantsByProfession.map(profession => (
					<li key={profession.profession}>
						{profession.profession}, count: {profession.count}
					</li>
				))}
			</ul>
		</PageLayout>
	);
};

const mapStateToProps = state => ({
	habitantsByHairColor: state.stats.habitantsByHairColor,
	habitantsByProfession: state.stats.habitantsByProfession,
	error: state.stats.error
});

export default connect(
	mapStateToProps,
	{ loadHabitantsByHairColor, loadHabitantsByProfession }
)(DashBoardPage);
