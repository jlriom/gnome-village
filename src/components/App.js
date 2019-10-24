import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../shared/history";
import { connect } from "react-redux";
import Header from "./Header";
import LandingPage from "./LandingPage";
import UserPage from "./UserPage";
import Spinner from "./Spinner";
import PrivateRoute from "./PrivateRoute";
import { doLogin, doLogout } from "../store/actions/auth";

const App = ({ auth, doLogin, doLogout }) => (
	<Router history={history}>
		<div>
			<Header doLogin={doLogin} doLogout={doLogout} auth={auth} />
			<Spinner />
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<PrivateRoute path='/dashboard' component={UserPage} auth={auth} />
				<Route component={() => <div>No such page!</div>} />
			</Switch>
		</div>
	</Router>
);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ doLogin, doLogout }
)(App);
