import * as types from "./actionTypes";

export const operationInProgress = () => ({
	type: types.APP_OPERATION_IN_PROGRESS
});

export const operationDone = () => ({
	type: types.APP_OPERATION_DONE
});
