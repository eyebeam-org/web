import { loadData } from "$lib/sanity.js"

// GET =>
export const get = async (request) => {
    const programs = await loadData("*[_type == 'program']")
    const events = await loadData("*[_type == 'event']{..., people[]->{...}}")
    const response = {
        programs: programs,
        events: events
    }
    return { body: response.status === 404 ? 'ERROR' : response };
};