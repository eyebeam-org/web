import { loadData } from "$lib/sanity.js"
// GET =>
export const get = async (request) => {
	const page = await loadData("*[_type == 'videopage' && slug.current == $slug]{...,'transcriptUrl': transcript.asset->url,people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { page: page.status === 404 ? 'ERROR' : page } };
};