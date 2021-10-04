import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
    console.log('slug =>', request.params.slug)
	const response = await loadData("*[_type == 'person' && slug.current == $slug][0]", {slug: request.params.slug})
	if (response.status === 404) {
		return { body: 'ERROR' };
	}
	return { body: response }
};