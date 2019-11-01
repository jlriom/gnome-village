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

const AnonymousRouting = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/user/register' component={RegisterPage} />
			<Route exact path='/auth/login' component={LoginPage} />
			<Route exact path='/about' component={AboutPage} />
			<Route component={NotFoundPage} />
		</Switch>
	);
};

const AuthenticatedRouting = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/dashboard' component={DashBoardPage} />
			<Route exact path='/brastlewark' component={SearchPage} />
			<Route exact path='/brastlewark/:id' component={HabitantPage} />
			<Route exact path='/user/myprofile' component={MyProfilePage} />
			<Route exact path='/user/unregister' component={UnRegisterPage} />
			<Route exact path='/auth/logout' component={LogoutPage} />
			<Route exact path='/user/register' component={RegisterPage} />
			<Route exact path='/about' component={AboutPage} />
			<Route component={NotFoundPage} />
		</Switch>
	);
};

const AppLayout = ({ auth }) => (
	<div>
		<Router history={history}>
			<AppHeader auth={auth} />
			<div className='container my-4'>
				{auth.isLoggedIn && <AuthenticatedRouting />}
				{!auth.isLoggedIn && <AnonymousRouting />}
			</div>
			<AppFooter />
		</Router>
	</div>
);

export default AppLayout;
