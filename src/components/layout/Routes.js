import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../shared/history";
import LandingPage from "../../containers/LandingPage";
import UserPage from "../../containers/UserPage";
import PrivateRoute from "./PrivateRoute";

const Routes = ({ auth }) => (
	<div>
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<PrivateRoute path='/dashboard' component={UserPage} auth={auth} />
				<Route component={() => <div>No such page!</div>} />
			</Switch>
		</Router>
	</div>
);
export default Routes;
