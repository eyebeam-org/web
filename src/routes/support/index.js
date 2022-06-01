import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
	const about = await loadData("*[_id in ['donate', 'the-fold', 'join-us', 'volunteer', 'interns', 'supporters', 'contact']]")
	return {
		body: {
			about: about.status === 404 ? 'ERROR' : about,
		}
	};
};
