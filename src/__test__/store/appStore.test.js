
import { createStore } from "redux";
import rootReducer from "../../store/reducers";
import * as appActions from "../../store/actions/appActions";

const initialState = {
	app: {
		loading: false,
		numOperationsInProgress: 0,
		message: null
	},
	auth: {},
	stats: {},
	search: {},
	user: {}
};

describe("App Store", () => {
	it("Should handle operation operation in progress", function () {

		const store = createStore(rootReducer, initialState);

		const action = appActions.operationInProgress();
		store.dispatch(action);

		const newState = store.getState();
		expect(newState.app.numOperationsInProgress).toEqual(initialState.app.numOperationsInProgress + 1);
	});

	it("Should handle operation operation done", function () {

		const store = createStore(rootReducer, initialState);

		const action = appActions.operationDone();
		store.dispatch(action);

		const newState = store.getState();
		expect(newState.app.numOperationsInProgress).toEqual(initialState.app.numOperationsInProgress);
	});

	it("Should show a message", function () {
		const store = createStore(rootReducer, initialState);
		const summary = "summary";
		const message = "message";

		const action = appActions.showMessage(summary, message);
		store.dispatch(action);

		const newState = store.getState();
		expect(newState.app.message).toEqual({ summary, detail: message, severity: "info" });
	});

	it("Should show an error", function () {
		const store = createStore(rootReducer, initialState);
		const summary = "summary";
		const message = "message";

		const action = appActions.showError(summary, message);
		store.dispatch(action);

		const newState = store.getState();
		expect(newState.app.message).toEqual({ summary, detail: message, severity: "error" });
	});
});
