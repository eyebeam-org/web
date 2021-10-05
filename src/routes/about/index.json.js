import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const response = await loadData("*[_type == 'aboutPage']")
	return { body: response.status === 404 ? 'ERROR' : response };
};