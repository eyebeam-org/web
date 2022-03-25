import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const project = await loadData("*[_type == 'project' && slug.current == $slug]{..., people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { project: project.status === 404 ? 'ERROR' : project } };
};