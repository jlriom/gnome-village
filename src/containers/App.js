import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AppLayout from "../components/layout/AppLayout";

const App = ({ auth, loading, message }) => (
	<AppLayout auth={auth} loading={loading} message={message}></AppLayout>
);
const mapStateToProps = state => ({
	auth: state.auth,
	loading: state.app.loading,
	message: state.app.message
});

App.propTypes = {
	auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
