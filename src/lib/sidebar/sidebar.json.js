import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
    const stickers = await loadData("*[_id == 'stickers']{...}[0]")
    const openEyebeam = await loadData("*[_id == 'openEyebeam']{...}[0]")
    console.log('open eyebeam: ', openEyebeam)
    const response = {
        stickers: stickers,
        openEyebeam: openEyebeam
    }
    return { body: response.status === 404 ? 'ERROR' : response };
};
