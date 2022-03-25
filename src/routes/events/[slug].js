import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const event = await loadData("*[_type == 'event' && slug.current == $slug]{...,people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return {
		body: {
			event: event.status === 404 ? 'ERROR' : event
		}
	};
};