import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

const NotFoundPage = () => {
	return (
		<PageLayout headerText='Page not found'>
			<Link to='/'>Go to Home page</Link>
		</PageLayout>
	);
};

export default NotFoundPage;
