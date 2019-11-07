import React from "react";
import PropTypes from "prop-types";

import CategoryItem from "./CategoryItem";

const HabitantsByHairColor = ({ habitantsByHairColor }) => (
	<ul className='list-group my-4'>
		<li className='list-group-item  list-group-item-secondary'>
			Habitants by hair color
		</li>
		{habitantsByHairColor.map(hairColor => (
			<CategoryItem
				key={hairColor.hair_color}
				category={hairColor.hair_color}
				count={hairColor.count}></CategoryItem>
		))}
	</ul>
);

HabitantsByHairColor.propTypes = {
	habitantsByHairColor: PropTypes.array.isRequired
};

export default HabitantsByHairColor;
