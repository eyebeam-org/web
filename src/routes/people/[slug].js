import { loadData } from "$lib/sanity.js"

export const prerender = false;
// GET =>
export const get = async (request) => {
	const page = await loadData("*[_type == 'person' && slug.current == $slug]{..., internalLinks[]->{...},'connectedPosts': *[_type in ['event', 'press', 'program', 'project', 'note', 'videoPost', 'news', 'journalPost'] && references(^._id)]{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};
