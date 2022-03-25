import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
	const people = await loadData("*[_type == 'person'] | order(lastName asc)")
	return { body: { people: people.status === 404 ? 'ERROR' : people } };
};