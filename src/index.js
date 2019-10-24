import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

//import brastlewarkHttpTest from "./api/brastlewark-http.test";
//import readApiTest from "./api/brastlewark-read-api.tests";
//import writeApiTest from "./api/brastlewark-write-api.tests";

//writeApiTest();
//readApiTest();
//brastlewarkHttpTest();

//ReactDOM.render(<App />, document.getElementById("root"));
