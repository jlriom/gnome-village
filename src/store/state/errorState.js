export const noError = null;

export const createError = (category, errorDetails) => {
	return {
		category,
		errorDetails: { ...errorDetails }
	};
};
