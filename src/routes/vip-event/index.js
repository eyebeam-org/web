import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
    const page = await loadData("*[_id == 'eyebeam-is-changing'][0]")
    return { body: { page: page.status === 404 ? 'ERROR' : page } };
};