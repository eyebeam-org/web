import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
    const programs = await loadData("*[_type == 'program']")
    const events = await loadData("*[_type == 'event']{..., people[]->{...}}")
    const stickers = await loadData("*[_id == 'stickers']{...}[0]")
    return {
        body: {
            programs: programs.status === 404 ? 'ERROR' : programs,
            events: events.status === 404 ? 'ERROR' : events,
            stickers: stickers.status === 404 ? 'ERROR' : stickers
        }
    };
}