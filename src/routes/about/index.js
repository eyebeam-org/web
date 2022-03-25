import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
	const about = await loadData("*[_id in ['what-is-eyebeam', 'our-mission-and-values', 'our-history', 'staff-and-board', 'artists', 'support-eyebeam', 'get-involved', 'press-and-news', 'our-operating-documents', 'media-kit', 'contact']]{..., 'xoxoxoxo': *[_type == 'press' || _type == 'news' ][0..3]{...}}")
	const pressAndNews = await loadData("*[_type == 'press' || _type == 'news' ][0..3]")
	return {
		body: {
			about: about.status === 404 ? 'ERROR' : about,
			pressAndNews: pressAndNews.status === 404 ? 'ERROR' : pressAndNews
		}
	};
	// return {
	// 	body: {
	// 		about: 'xxxxx',
	// 		pressAndNews: 'yyyyy'
	// 	}
	// };
};