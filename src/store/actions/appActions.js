import * as types from "./actionTypes";

export const operationInProgress = () => ({
	type: types.APP_OPERATION_IN_PROGRESS
});

export const operationDone = () => ({
	type: types.APP_OPERATION_DONE
});

export const showMessage = (summary, message) => ({
	type: types.APP_SHOW_MESSAGE,
	message: {
		severity: "info",
		summary: summary,
		detail: message
	}
});

export const showError = (summary, message) => ({
	type: types.APP_SHOW_ERROR,
	message: {
		severity: "error",
		summary: summary,
		detail: message
	}
});
