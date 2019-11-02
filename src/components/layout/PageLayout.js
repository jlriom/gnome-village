import React from "react";
import PropTypes from "prop-types";

const PageLayout = ({ headerText, ...props }) => {
	return (
		<>
			{headerText && <h2 className='my-3 display-4'>{headerText}</h2>}
			{headerText && <hr></hr>}
			<div>{props.children}</div>
		</>
	);
};

PageLayout.propTypes = {
	headerText: PropTypes.string
};

export default PageLayout;
