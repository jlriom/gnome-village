import React from "react";
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

export default connect(mapStateToProps)(App);
