import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const page = await loadData("*[_type == 'page' && slug.current == $slug]{..., internalLinks[]->{...},'connectedPosts': *[_type in ['event', 'press', 'program', 'project', 'note', 'videoPost', 'news'] && references(^._id)]{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};