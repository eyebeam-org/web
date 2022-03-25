import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const page = await loadData("*[_id == $slug]{..., internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};
