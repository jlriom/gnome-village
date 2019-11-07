import React from "react";
import PropTypes from "prop-types";
import { Chart } from "primereact/chart";

const HabitantsByProfessionChart = ({ habitantsByProfession }) => {
	const habitantsByProfessionData = {
		labels: habitantsByProfession.map(profession => profession.profession),
		datasets: [
			{
				label: "Profession",
				data: habitantsByProfession.map(profession => profession.count),
				fill: false,
				borderColor: "#4bc0c0"
			}
		]
	};

	const habitantsByProfessionDataOptions = {
		title: {
			display: true,
			text: "Habitants by Profession",
			fontSize: 16
		},
		legend: {
			position: "bottom"
		},
		responsive: true
	};

	return (
		<Chart
			type='bar'
			data={habitantsByProfessionData}
			options={habitantsByProfessionDataOptions}
		/>
	);
};

HabitantsByProfessionChart.propTypes = {
	habitantsByProfession: PropTypes.array.isRequired
};

export default HabitantsByProfessionChart;
