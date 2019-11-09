import React from "react";
import PropTypes from "prop-types";

const TotalSection = ({ habitantsByHairColor }) => (
	<ul className='list-group my-4'>
		<li className='list-group-item  list-group-item-info'>
			<span
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}>
				<span>Total of habitans</span>
				<span className='badge  badge-pill badge-secondary '>
					{habitantsByHairColor.reduce((total, current) => {
						return total + current.count;
					}, 0)}
				</span>
			</span>
		</li>
	</ul>
);

TotalSection.propTypes = {
	habitantsByHairColor: PropTypes.array.isRequired
};

export default TotalSection;
