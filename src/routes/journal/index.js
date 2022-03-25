import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const journal = await loadData("*[_type == 'blogPost']")
	return { body: { journal: journal.status === 404 ? 'ERROR' : journal } };
};