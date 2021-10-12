import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
	const response = await loadData("*[_type in ['event', 'project', 'press', 'program', 'note', 'goal', 'video']]{..., person->{...}}")
	return { body: response.status === 404 ? 'ERROR' : response };
};