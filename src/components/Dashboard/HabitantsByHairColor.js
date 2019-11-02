import React from "react";

import CategoryItem from "./CategoryItem";

const HabitantsByHairColor = ({ habitantsByHairColor }) => (
	<ul className='list-group my-4'>
		<li className='list-group-item  list-group-item-secondary'>
			Habitants by hair color
		</li>
		{habitantsByHairColor.map(hairColor => (
			<CategoryItem
				category={hairColor.hair_color}
				count={hairColor.count}></CategoryItem>
		))}
	</ul>
);

export default HabitantsByHairColor;
