import { loadData } from "$lib/sanity.js"

export const prerender = false;
export const get = async (request) => {
	const page = await loadData("*[_type == 'project' && slug.current == $slug]{..., people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};
