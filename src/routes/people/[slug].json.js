import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const response = await loadData("*[_type == 'person' && slug.current == $slug]{..., internalLinks[]->{...},'connectedPosts': *[_type in ['event', 'press', 'program', 'project', 'note', 'videoPost', 'news'] && references(^._id)]{...}}[0]", { slug: request.params.slug })
	return { body: response.status === 404 ? 'ERROR' : response };
};