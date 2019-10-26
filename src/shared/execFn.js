import * as stringify from "json-stringify-safe";

const txt = o => stringify(o, null, 2);

const execFn = (fn, handleError = null, audit = false) => {
	const wrapper = async (...args) => {
		const fnName = fn.name ? fn.name : fn;
		const stringArgs = args.map(txt).join(",\n");
		try {
			audit &&
				console.log(
					`Attempting to call function: "${fnName}" with arguments: ${stringArgs}`
				);
			const result = await fn(...args);
			audit &&
				console.log(
					`Call to function "${fnName}" suceeded with result: ${txt(result)}`
				);
			return result;
		} catch (e) {
			console.error(
				`Call to function "${fnName}" failed with message: ${
					e.message
				} \n$ Call Stack: ${console.trace()} \n, Details: \n${txt(e)}`
			);

			if (handleError !== null) {
				handleError(e);
			} else {
				throw e;
			}
		}
	};
	return wrapper;
};

export default execFn;
