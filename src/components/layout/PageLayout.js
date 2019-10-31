import React from "react";
import PropTypes from "prop-types";

const PageLayout = ({ headerText, children }) => {
	return (
		<>
			<h2 className='my-3 display-4'>{headerText}</h2>
			<div>{children}</div>
		</>
	);
};

PageLayout.propTypes = {
	headerText: PropTypes.string,
	children: PropTypes.element
};

export default PageLayout;
