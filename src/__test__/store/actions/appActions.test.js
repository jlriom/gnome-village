import * as appActions from "../../../store/actions/appActions";
import * as types from "../../../store/actions/actionTypes";


describe("appActions", () => {
	it("should create a APP_OPERATION_IN_PROGRESS action", () => {
		const expectedAction = {
			type: types.APP_OPERATION_IN_PROGRESS,
		};

		const action = appActions.operationInProgress();
		expect(action).toEqual(expectedAction);
	});

	it("should create a APP_OPERATION_DONE action", () => {
		const expectedAction = {
			type: types.APP_OPERATION_DONE,
		};

		const action = appActions.operationDone();
		expect(action).toEqual(expectedAction);
	});

	it("should create a APP_OPERATION_DONE action", () => {
		const expectedAction = {
			type: types.APP_SHOW_MESSAGE,
			message: {
				severity: "info",
				summary: "summary",
				detail: "message"
			}
		};

		const action = appActions.showMessage(expectedAction.message.summary, expectedAction.message.detail);
		expect(action).toEqual(expectedAction);
	});

	it("should create a APP_SHOW_ERROR action", () => {
		const expectedAction = {
			type: types.APP_SHOW_ERROR,
			message: {
				severity: "error",
				summary: "summary",
				detail: "message"
			}
		};

		const action = appActions.showError(expectedAction.message.summary, expectedAction.message.detail);
		expect(action).toEqual(expectedAction);
	});
});

