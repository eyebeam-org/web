import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const program = await loadData("*[_type == 'program' && slug.current == $slug]{..., people[]->{...}, internalLinks[]->{...}}[0]", { slug: request.params.slug })
	return { body: { program: program.status === 404 ? 'ERROR' : program } };
};