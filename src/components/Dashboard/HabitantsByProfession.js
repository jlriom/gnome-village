import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

const HabitantsByProfession = ({ habitantsByProfession }) => (
	<ul className='list-group my-4'>
		<li className='list-group-item  list-group-item-secondary'>
			Habitans by profession
		</li>
		{habitantsByProfession.map(profession => (
			<CategoryItem
				key={profession.profession}
				category={profession.profession}
				count={profession.count}></CategoryItem>
		))}
	</ul>
);

HabitantsByProfession.propTypes = {
	habitantsByProfession: PropTypes.array.isRequired
};

export default HabitantsByProfession;
