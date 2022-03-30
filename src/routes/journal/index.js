import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
	const journal = await loadData("*[_type == 'journalPost']{...,people[]->{...}} | order(_updatedAt desc)")
	return { body: { journal: journal.status === 404 ? 'ERROR' : journal } };
};