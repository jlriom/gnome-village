import * as stringify from "json-stringify-safe";

const txt = o => stringify(o, null, 2);

const logBeginExecFn = (audit, fnName, args) => {
	const stringArgs = args.map(txt).join(",\n");
	audit &&
		console.log(
			`Attempting to call function: "${fnName}" with arguments: ${stringArgs}`
		);
};

const logEndExecFn = (audit, fnName, result) => {
	audit &&
		console.log(
			`Call to function "${fnName}" suceeded with result: ${txt(result)}`
		);
};

const logErrExecFn = (fnName, err) => {
	console.error(
		`Call to function "${fnName}" failed with message: ${
			err.message
		} \n$ Call Stack: ${console.trace()} \n, Details: \n${txt(err)}`
	);
};

const execFnWithErrorHandlerAsync = (fn, handleError = null, audit = false) => {
	const wrapper = async (...args) => {
		const fnName = fn.name ? fn.name : fn;
		try {
			logBeginExecFn(audit, fnName, args);
			const result = await fn(...args);
			logEndExecFn(audit, fnName, result);
			return result;
		} catch (e) {
			logErrExecFn(fnName, e);
			if (handleError !== null) {
				handleError(e);
			} else {
				throw e;
			}
		}
	};
	return wrapper;
};

const execFnAsync = (fn, audit = false) => {
	const wrapper = (...args) => {
		return new Promise((resolve, reject) => {
			const fnName = fn.name ? fn.name : fn;
			try {
				logBeginExecFn(audit, fnName, args);
				const result = fn(...args);
				logEndExecFn(audit, fnName, result);
				resolve(result);
			} catch (e) {
				logErrExecFn(fnName, e);
				reject(e);
			}
		});
	};
	return wrapper;
};

export { execFnWithErrorHandlerAsync, execFnAsync };
