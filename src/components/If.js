import React from "react";
import PropTypes from "prop-types";
const If = props => (props.condition ? <>{props.children} </> : <> </>);

If.propTypes = {
	props: PropTypes.object
};

export default If;
