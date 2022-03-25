import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
    const page = await loadData("*[_id == 'newsletter'][0]")
    return { body: { page: page.status === 404 ? 'ERROR' : page } };
};