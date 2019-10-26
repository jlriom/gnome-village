import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);

Layout.propTypes = {
	children: PropTypes.element
};
export default Layout;
