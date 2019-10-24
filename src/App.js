import React from "react";
import { connect } from "react-redux";
import Layout from "./components/layout/Layout";
import Routes from "./components/layout/Routes";
import { doLogin, doLogout } from "./store/actions/auth";

const App = ({ auth, doLogin, doLogout }) => (
	<Layout doLogin={doLogin} doLogout={doLogout} auth={auth}>
		<Routes auth={auth} />
	</Layout>
);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ doLogin, doLogout }
)(App);
