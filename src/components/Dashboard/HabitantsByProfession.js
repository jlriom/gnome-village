import React from "react";

import CategoryItem from "./CategoryItem";

const HabitantsByProfession = ({ habitantsByProfession }) => (
	<ul className='list-group my-4'>
		<li className='list-group-item  list-group-item-secondary'>
			Habitans by profession
		</li>
		{habitantsByProfession.map(profession => (
			<CategoryItem
				category={profession.profession}
				count={profession.count}></CategoryItem>
		))}
	</ul>
);

export default HabitantsByProfession;
