import React from "react";
import PropTypes from "prop-types";
import { Chart } from "primereact/chart";

const HabitantsByHairColorChart = ({ habitantsByHairColor }) => {
	const habitantsByHairColorDataOptions = {
		title: {
			display: true,
			text: "Habitants by Hair Color",
			fontSize: 16
		},
		legend: {
			position: "bottom"
		},
		responsive: true
	};

	const habitantsByHairColorData = (labels, data) => ({
		labels: labels,
		datasets: [
			{
				label: "Hair Color",
				data: data,
				fill: false,
				borderColor: "#4bc0c0",
				backgroundColor: labels
			}
		]
	});

	return (
		<Chart
			type='doughnut'
			data={habitantsByHairColorData(
				habitantsByHairColor.map(hairColor => hairColor.hair_color),
				habitantsByHairColor.map(hairColor => hairColor.count)
			)}
			options={habitantsByHairColorDataOptions}
		/>
	);
};

HabitantsByHairColorChart.propTypes = {
	habitantsByHairColor: PropTypes.array.isRequired
};

export default HabitantsByHairColorChart;
