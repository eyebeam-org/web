import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
    const programs = await loadData("*[_type == 'program']")
    const events = await loadData("*[_type == 'event']{..., people[]->{...}}")
    const stickers = await loadData("*[_id == 'stickers']{...}[0]")

    const response = {
        programs: programs,
        events: events,
        stickers: stickers
    }
    return { body: response.status === 404 ? 'ERROR' : response };
};