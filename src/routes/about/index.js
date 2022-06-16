import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
	const about = await loadData("*[_id in ['what-is-eyebeam', 'get-involved', 'our-mission-and-values', 'our-history', 'staff-and-board', 'artists', 'press-and-news', 'our-operating-documents', 'media-kit', 'contact']]{..., 'xoxoxoxo': *[_type == 'press' || _type == 'news' ][0..3]{...}}")
	const pressAndNews = await loadData("*[_type == 'press' || _type == 'news' ][0..3]")
	return {
		body: {
			about: about.status === 404 ? 'ERROR' : about,
			pressAndNews: pressAndNews.status === 404 ? 'ERROR' : pressAndNews
		}
	};
};
