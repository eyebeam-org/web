import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const news = await loadData("*[_type == 'news']")
	const press = await loadData("*[_type == 'press']")
	const page = await loadData("*[_id == 'press-and-news']{..., internalLinks[]->{...}}[0]")
	return {
		body: {
			news: news.status === 404 ? 'ERROR' : news,
			press: press.status === 404 ? 'ERROR' : press,
			page: page.status === 404 ? 'ERROR' : page
		}
	};
};