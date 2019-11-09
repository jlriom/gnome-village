import React from "react";
import PropTypes from "prop-types";
const CategoryItem = ({ category, count }) => (
	<li className='list-group-item '>
		<span
			style={{
				display: "flex",
				justifyContent: "space-between"
			}}>
			<span>{category} </span>
			<span className='badge  badge-pill badge-secondary '>{count}</span>
		</span>
	</li>
);

CategoryItem.propTypes = {
	category: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired
};

export default CategoryItem;
