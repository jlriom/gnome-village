import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../../shared/history";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import "./AppLayout.css";

import {
	HomePage,
	DashBoardPage,
	AboutPage,
	NotFoundPage,
	SearchPage,
	HabitantPage,
	FriendsPage
} from "../../containers";

const AnonymousRouting = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
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
			<Route exact path='/brastlewark/friends' component={FriendsPage} />
			<Route exact path='/brastlewark/:name' component={HabitantPage} />
			<Route exact path='/about' component={AboutPage} />
			<Route component={NotFoundPage} />
		</Switch>
	);
};

const AppLayout = ({ auth, loading, message }) => {
	useEffect(() => {
		if (message) {
			if (message.severity === "error") {
				toast.error(`${message.summary}: ${message.detail}`);
			} else {
				toast.success(`${message.summary}: ${message.detail}`);
			}
		}
	}, [message]);

	return (
		<div>
			<Router history={history}>
				<AppHeader auth={auth} />
				{loading && <div className='spinner'></div>}
				<div className='container my-4'>
					{auth.isLoggedIn && <AuthenticatedRouting />}
					{!auth.isLoggedIn && <AnonymousRouting />}
				</div>
				<ToastContainer autoClose={3000} hideProgressBar />
				<AppFooter />
			</Router>
		</div>
	);
};

AppLayout.propTypes = {
	auth: PropTypes.object.isRequired,
	loading: PropTypes.bool.isRequired,
	message: PropTypes.object
};

export default AppLayout;
