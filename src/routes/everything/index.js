import { loadData } from "$lib/sanity.js"

export const get = async () => {
	const posts = await loadData("*[_type in ['event', 'project', 'press', 'news', 'program', 'note', 'videoPost']]{..., people[]->{...}} | order(_updatedAt desc)")
	const page = await loadData("*[_id == 'everything'][0]")
	return {
		body: {
			page: page.status === 404 ? 'ERROR' : page,
			posts: posts.status === 404 ? 'ERROR' : posts
		}
	};
};