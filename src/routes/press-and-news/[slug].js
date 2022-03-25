import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const post = await loadData("*[slug.current == $slug]{..., people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { post: post.status === 404 ? 'ERROR' : post } };
};

