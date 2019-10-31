import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../shared/history";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

import {
	HomePage,
	DashBoardPage,
	AboutPage,
	NotFoundPage,
	SearchPage,
	HabitantPage,
	MyProfilePage,
	RegisterPage,
	UnRegisterPage,
	LoginPage,
	LogoutPage
} from "../../containers";

const AppLayout = () => (
	<div>
		<Router history={history}>
			<AppHeader />
			<div className='container my-4'>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/dashboard' component={DashBoardPage} />
					<Route exact path='/brastlewark' component={SearchPage} />
					<Route exact path='/brastlewark/:id' component={HabitantPage} />
					<Route exact path='/user/myprofile' component={MyProfilePage} />
					<Route exact path='/user/register' component={RegisterPage} />
					<Route exact path='/user/unregister' component={UnRegisterPage} />
					<Route exact path='/auth/login' component={LoginPage} />
					<Route exact path='/auth/logout' component={LogoutPage} />
					<Route exact path='/about' component={AboutPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
			<AppFooter />
		</Router>
	</div>
);

export default AppLayout;
