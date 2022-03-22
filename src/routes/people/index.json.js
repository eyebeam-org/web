import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
    const stickers = await loadData("*[_id == 'stickers']{...}[0]")
    const openEyebeam = await loadData("*[_id == 'openEyebeam']{...}[0]")
		const people = await loadData("*[_type == 'person'] | order(lastName asc)")
		const response = {
			stickers: stickers,
			openEyebeam: openEyebeam
		}
		return { body: response.status === 404 ? 'ERROR' : response };
};
