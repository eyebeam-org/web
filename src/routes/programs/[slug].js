import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
	const page = await loadData("*[_type == 'program' && slug.current == $slug]{..., people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};
