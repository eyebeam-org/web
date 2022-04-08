import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
    const programs = await loadData("*[_type == 'program']")
    const events = await loadData("*[_type in ['event', 'press', 'news', 'note', 'videoPost', 'journalPost']]{..., people[]->{...}} | order(_createdAt desc)")
    const stickers = await loadData("*[_id == 'stickers']{...}[0]")

    return {
        body: {
            programs: programs.status === 404 ? 'ERROR' : programs,
            events: events.status === 404 ? 'ERROR' : addRoute(events),
            stickers: stickers.status === 404 ? 'ERROR' : stickers
        }
    };
}

function addRoute(data) {
    return data.map(item => {
        if (item._type == 'press' || item._type == 'news') {
            item.route = 'press-and-news'
        } else if (item._type == 'journalPost') {
            item.route = 'journal'
        } else if (item._type == 'videoPost') {
            item.route = 'videos'
        } else {
            item.route = 'notes'
        }
        return item
    })
}
