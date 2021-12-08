import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const response = await loadData("*[_type == 'videoPost' && slug.current == $slug]{...,people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	console.log(response)
	return { body: response.status === 404 ? 'ERROR' : response };
};