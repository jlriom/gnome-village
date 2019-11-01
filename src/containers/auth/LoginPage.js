import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";

import PageLayout from "../../components/layout/PageLayout";
import { Button } from "react-bootstrap";

const LoginPage = ({ login }) => {
	const handleLogin = () => {
		login("foo");
	};

	return (
		<PageLayout headerText='Login'>
			<Button variant='primary' onClick={handleLogin}>
				Login
			</Button>
		</PageLayout>
	);
};

export default connect(
	() => ({}),
	{ login }
)(LoginPage);
