export const loadToken = () => {
	try {
		const serialized = localStorage.getItem('token');

		if (serialized === null) {
			return undefined;
		}
		return JSON.parse(serialized);
	} catch (error) {
		return undefined;
	}
};

export const saveState = (token) => {
	try {
		const serialized = JSON.stringify(token);
		localStorage.setItem('token', serialized);
	} catch (error) {}
};

export const removeState = () => {
	try {
		localStorage.removeItem('token');
	} catch (error) {}
};
