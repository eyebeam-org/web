import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
	const programs = await loadData("*[_type == 'program']")
	return { body: { programs: programs.status === 404 ? 'ERROR' : programs } };
};
