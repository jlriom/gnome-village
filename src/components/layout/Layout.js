import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../shared/history";
import Header from "./Header";
import Footer from "./Footer";

import {
	DashBoardPage,
	GnomesPage,
	GnomeDetailsPage,
	CreateGnomePage,
	NotFoundPage
} from "../../containers";

const Layout = () => (
	<div>
		<Router history={history}>
			<Header />
			<div className='container my-4'>
				<Switch>
					<Route exact path='/' component={DashBoardPage} />
					<Route exact path='/gnomes' component={GnomesPage} />
					<Route exact path='/gnomes/new' component={CreateGnomePage} />
					<Route exact path='/gnomes/:id' component={GnomeDetailsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
			<Footer />
		</Router>
	</div>
);

export default Layout;
