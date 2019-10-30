import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../shared/history";
import {
	DashBoardPage,
	GnomesPage,
	GnomeDetailsPage,
	CreateGnomePage,
	NotFoundPage
} from "../../containers";

const Routes = () => (
	<div>
		<Router history={history}>
			<Switch>
				<Route exact path='/' component={DashBoardPage} />
				<Route exact path='/gnomes' component={GnomesPage} />
				<Route exact path='/gnomes/new' component={CreateGnomePage} />
				<Route exact path='/gnomes/:id' component={GnomeDetailsPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	</div>
);
export default Routes;
