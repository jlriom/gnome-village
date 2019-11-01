import React from "react";
import { connect } from "react-redux";

import AppLayout from "../components/layout/AppLayout";

const App = ({ auth }) => <AppLayout auth={auth}></AppLayout>;
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(App);
