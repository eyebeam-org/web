import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const response = await loadData("*[_id in ['what-is-eyebeam', 'our-mission-and-values', 'our-history', 'staff-and-board', 'artists', 'support-eyebeam', 'get-involved', 'press-and-news', 'our-operating-documents', 'media-kit', 'contact']]{..., 'xoxoxoxo': *[_type == 'press' || _type == 'news' ][0..3]{...}}")
	const pressAndNews = await loadData("*[_type == 'press' || _type == 'news' ][0..3]")
	return {
		body: {
			about: response.status === 404 ? 'ERROR' : response,
			pressAndNews: pressAndNews.status === 404 ? 'ERROR' : pressAndNews
		}
	};
};