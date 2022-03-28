import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
	const page = await loadData("*[_type == 'blogpage' && slug.current == $slug]{...,people[]->{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};