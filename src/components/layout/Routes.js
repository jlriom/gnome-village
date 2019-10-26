import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../shared/history";
import LandingPage from "../../containers/LandingPage";

const Routes = () => (
	<div>
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route component={() => <div>No such page!</div>} />
			</Switch>
		</Router>
	</div>
);
export default Routes;
