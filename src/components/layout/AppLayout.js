import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../shared/history";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

import {
	DashBoardPage,
	GnomesPage,
	GnomeDetailsPage,
	CreateGnomePage,
	NotFoundPage
} from "../../containers";

const AppLayout = () => (
	<div>
		<Router history={history}>
			<AppHeader />
			<div className='container my-4'>
				<Switch>
					<Route exact path='/' component={DashBoardPage} />
					<Route exact path='/gnomes' component={GnomesPage} />
					<Route exact path='/gnomes/new' component={CreateGnomePage} />
					<Route exact path='/gnomes/:id' component={GnomeDetailsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
			<AppFooter />
		</Router>
	</div>
);

export default AppLayout;
