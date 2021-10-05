import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
	const response = await loadData("*[_type == 'note']")
	return { body: response.status === 404 ? 'ERROR' : response };
};