import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const response = await loadData("*[_type == 'person']")
	if (response.status === 404) {
		return { body: 'ERROR' };
	}
	return { body: response }
};