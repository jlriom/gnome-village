import React from "react";

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

export default CategoryItem;
