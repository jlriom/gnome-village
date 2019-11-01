import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	loadHabitantsByHairColor,
	loadHabitantsByProfession
} from "../store/actions/statsActions";

import PageLayout from "../components/layout/PageLayout";

const DashBoardPage = ({
	stats,
	loadHabitantsByHairColor,
	loadHabitantsByProfession
}) => {
	useEffect(() => {
		loadHabitantsByHairColor();
		loadHabitantsByProfession();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageLayout headerText='Dashboard'>
			<p>
				Total of Habitants:
				{stats.habitantsByHairColor.reduce((total, current) => {
					return total + current.count;
				}, 0)}
			</p>
			<ul>
				{stats.habitantsByHairColor.map(hairColor => (
					<li key={hairColor.hair_color}>
						{hairColor.hair_color}, count: {hairColor.count}
					</li>
				))}
			</ul>

			<ul>
				{stats.habitantsByProfession.map(profession => (
					<li key={profession.profession}>
						{profession.profession}, count: {profession.count}
					</li>
				))}
			</ul>
		</PageLayout>
	);
};

const mapStateToProps = state => ({
	stats: state.stats
});

export default connect(
	mapStateToProps,
	{ loadHabitantsByHairColor, loadHabitantsByProfession }
)(DashBoardPage);
