import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const post = await loadData("*[_type == 'blogPost' && slug.current == $slug]{...,people[]->{...}}[0]", { slug: request.params.slug })
	return { body: { post: post.status === 404 ? 'ERROR' : post } };
};