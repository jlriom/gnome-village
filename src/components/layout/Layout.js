import React from "react";
import Header from "./Header";
import Spinner from "./Spinner";

const Layout = ({ auth, doLogin, doLogout, children }) => (
	<div>
		<Header doLogin={doLogin} doLogout={doLogout} auth={auth} />
		<Spinner />
		{children}
	</div>
);

export default Layout;
