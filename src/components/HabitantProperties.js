import React from "react";
import PropTypes from "prop-types";

const RenderHabitantProperty = ({ name, value }) => (
	<>
		<dt className='col-sm-6'> {name}</dt>
		<dd className='col-sm-6'> {value}</dd>
	</>
);

RenderHabitantProperty.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.any.isRequired
};

const HabitantProperties = ({ age, hair_color, weight, height }) => (
	<>
		<RenderHabitantProperty name='Age:' value={age} />
		<RenderHabitantProperty name='Hair Color:' value={hair_color} />
		<RenderHabitantProperty name='Weight:' value={weight.toFixed(3)} />
		<RenderHabitantProperty name='Height:' value={height.toFixed(3)} />
	</>
);

HabitantProperties.propTypes = {
	age: PropTypes.number.isRequired,
	hair_color: PropTypes.string.isRequired,
	weight: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired
};

export default HabitantProperties;
