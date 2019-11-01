import React from "react";
import PropTypes from "prop-types";

const PageLayout = ({ headerText, ...props }) => {
	return (
		<>
			<h2 className='my-3 display-4'>{headerText}</h2>
			<hr></hr>
			<div>{props.children}</div>
		</>
	);
};

PageLayout.propTypes = {
	headerText: PropTypes.string
};

export default PageLayout;
