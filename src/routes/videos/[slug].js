import { loadData } from "$lib/sanity.js"
// GET =>
export const get = async (request) => {
	const post = await loadData("*[_type == 'videoPost' && slug.current == $slug]{...,'transcriptUrl': transcript.asset->url,people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { post: post.status === 404 ? 'ERROR' : post } };
};