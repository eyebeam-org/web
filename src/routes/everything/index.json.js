import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
	const posts = await loadData("*[_type in ['event', 'project', 'press', 'program', 'note', 'goal', 'video']]{..., person->{...}}")
	const page = await loadData("*[_id == 'everything'][0]")
	const response = {
		page: page,
		posts: posts
	}
	return { body: response.status === 404 ? 'ERROR' : response };
};