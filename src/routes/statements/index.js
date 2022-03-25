import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async () => {
	const statements = await loadData("*[_type == 'statement']{..., person->{...}}")
	return { body: { statements: statements.status === 404 ? 'ERROR' : statements } };
};