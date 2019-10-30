import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import DashBoardPage from "../../containers/DashBoardPage";
import GnomesPage from "../../containers/GnomesPage";
import GnomeDetailsPage from "../../containers/GnomeDetailsPage";
import CreateGnomePage from "../../containers/CreateGnomePage";
import NotFoundPage from "../../containers/NotFoundPage";

const Routes = () => (
	<div>
		<Router>
			<Switch>
				<Route exact path='/' component={DashBoardPage} />
				<Route exact path='/gnomes' component={GnomesPage}>
					<Route exact path='/:id' component={GnomeDetailsPage} />
					<Route exact path='/new' component={CreateGnomePage} />
				</Route>
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	</div>
);
export default Routes;
