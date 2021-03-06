import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as statsActions from "../store/actions/statsActions";

import PageLayout from "../components/layout/PageLayout";
import HabitantsByHairColorChart from "../components/Dashboard/HabitantsByHairColorChart";
import HabitantsByProfessionChart from "../components/Dashboard/HabitantsByProfessionChart";

import TotalSection from "../components/Dashboard/TotalSection";
import HabitantsByHairColor from "../components/Dashboard/HabitantsByHairColor";
import HabitantsByProfession from "../components/Dashboard/HabitantsByProfession";

const DashBoardPage = ({
	habitantsByHairColor,
	habitantsByProfession,
	loadHabitantsByHairColor,
	loadHabitantsByProfession
}) => {
	useEffect(() => {
		loadHabitantsByHairColor();
	}, [loadHabitantsByHairColor]);

	useEffect(() => {
		loadHabitantsByProfession();
	}, [loadHabitantsByProfession]);

	return (
		<PageLayout headerText='Dashboard'>
			<div className='container'>
				<div className='row'>
					<div className='col-3'>
						<TotalSection habitantsByHairColor={habitantsByHairColor} />
						<HabitantsByHairColor habitantsByHairColor={habitantsByHairColor} />
						<HabitantsByProfession
							habitantsByProfession={habitantsByProfession}
						/>
					</div>
					<div className='col-9'>
						<div className='m-4'>
							<HabitantsByHairColorChart
								habitantsByHairColor={habitantsByHairColor}
							/>
						</div>
						<div className='m-4'>
							<HabitantsByProfessionChart
								habitantsByProfession={habitantsByProfession}
							/>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

DashBoardPage.propTypes = {
	habitantsByHairColor: PropTypes.array.isRequired,
	habitantsByProfession: PropTypes.array.isRequired,
	loadHabitantsByHairColor: PropTypes.func.isRequired,
	loadHabitantsByProfession: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	habitantsByHairColor: state.stats.habitantsByHairColor,
	habitantsByProfession: state.stats.habitantsByProfession,
	error: state.stats.error
});

export default connect(
	mapStateToProps,
	{ ...statsActions }
)(DashBoardPage);
