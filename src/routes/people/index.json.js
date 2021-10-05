import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
	const response = await loadData("*[_type == 'person']")
	return { body: response.status === 404 ? 'ERROR' : response };
};