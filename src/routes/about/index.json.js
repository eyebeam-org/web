import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const response = await loadData("*[_id in ['what-is-eyebeam', 'our-mission-and-values', 'our-history', 'staff-and-board', 'artists', 'support-eyebeam', 'get-involved', 'press-and-news', 'our-operating-documents', 'media-kit', 'contact']]")
	return { body: response.status === 404 ? 'ERROR' : response };
};