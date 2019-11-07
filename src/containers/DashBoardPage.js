import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	loadHabitantsByHairColor,
	loadHabitantsByProfession
} from "../store/actions/statsActions";

import PageLayout from "../components/layout/PageLayout";
import HabitantsByHairColorChart from "../components/Dashboard/HabitantsByHairColorChart";
import HabitantsByProfessionChart from "../components/Dashboard/HabitantsByProfessionChart";

import TotalSection from "../components/Dashboard/TotalSection";
import HabitantsByHairColor from "../components/Dashboard/HabitantsByHairColor";
import HabitantsByProfession from "../components/Dashboard/HabitantsByProfession";

const DashBoardPage = ({
	habitantsByHairColor,
	habitantsByProfession,
	error,
	loadHabitantsByHairColor,
	loadHabitantsByProfession
}) => {
	const [loadedHabitantsByHairColor, setLoadedHabitantsByHairColor] = useState(
		null
	);
	const [loadedHabitantsByProfession, setHabitantsByProfession] = useState(
		null
	);

	const [loadingByHairColor, setLoadingByHairColor] = useState(true);
	const [loadingByProfession, setLoadingByProfession] = useState(true);
	useEffect(() => {
		if (loadingByHairColor) {
			loadHabitantsByHairColor();
			setLoadedHabitantsByHairColor(habitantsByHairColor);
			setLoadingByHairColor(false);
		}
	}, [loadingByHairColor]);

	useEffect(() => {
		if (loadingByProfession) {
			loadHabitantsByProfession();
			setHabitantsByProfession(habitantsByProfession);
			setLoadingByProfession(false);
		}
	}, [loadingByProfession]);

	const infoLoaded = loadedHabitantsByHairColor && loadedHabitantsByProfession;
	return (
		<PageLayout headerText='Dashboard'>
			<div className='container'>
				{infoLoaded && (
					<div className='row'>
						<div className='col-3'>
							<TotalSection habitantsByHairColor={loadedHabitantsByHairColor} />
							<HabitantsByHairColor
								habitantsByHairColor={loadedHabitantsByHairColor}
							/>
							<HabitantsByProfession
								habitantsByProfession={loadedHabitantsByProfession}
							/>
						</div>
						<div className='col-9'>
							<div className='m-4'>
								<HabitantsByHairColorChart
									habitantsByHairColor={loadedHabitantsByHairColor}
								/>
							</div>
							<div className='m-4'>
								<HabitantsByProfessionChart
									habitantsByProfession={loadedHabitantsByProfession}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
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
