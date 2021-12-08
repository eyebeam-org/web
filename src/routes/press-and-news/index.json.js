import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const news = await loadData("*[_type == 'news']")
	const press = await loadData("*[_type == 'press']")
	const page = await loadData("*[_id == 'press-and-news']{..., internalLinks[]->{...}}[0]")
	const response = {
		news: news,
		press: press,
		page: page
	}
	return { body: response.status === 404 ? 'ERROR' : response };
};