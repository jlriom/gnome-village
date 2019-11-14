import appReducer from "../../../store/reducers/appReducer";
import * as actions from "../../../store/actions/appActions";

describe("appReducer", () => {
	it("should increment number of operations in progress when APP_OPERATION_IN_PROGRESS is passed", () => {
		const initialState = {
			loading: false,
			numOperationsInProgress: 0,
			message: null
		}
		const newState = appReducer(initialState, actions.operationInProgress())
		expect(newState.numOperationsInProgress).toEqual(initialState.numOperationsInProgress + 1);
	});



	it("should decrement number of operations in progress when APP_OPERATION_DONE is passed", function () {

		const initialState = {
			loading: false,
			numOperationsInProgress: 1,
			message: null
		}
		const newState = appReducer(initialState, actions.operationDone())
		expect(newState.numOperationsInProgress).toEqual(initialState.numOperationsInProgress - 1);
	});

	it("Should show a message when APP_SHOW_MESSAGE is passed", function () {
		const initialState = {
			loading: false,
			numOperationsInProgress: 1,
			message: null
		}

		const message = { summary: "summary", detail: "message", severity: "info" }

		const newState = appReducer(initialState, actions.showMessage(message.summary, message.detail));

		expect(newState).toEqual({ ...initialState, message });
	});

	it("Should show an error when APP_SHOW_ERROR is passed", function () {
		const initialState = {
			loading: false,
			numOperationsInProgress: 1,
			message: null
		}

		const message = { summary: "summary", detail: "message", severity: "error" }

		const newState = appReducer(initialState, actions.showError(message.summary, message.detail));

		expect(newState).toEqual({ ...initialState, message });
	});
});
