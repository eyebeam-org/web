import { loadData } from "$lib/sanity.js"

export const get = async (request) => {
    const programs = await loadData("*[_type == 'program']")
    const newPosts = await loadData("*[_type in ['event', 'press', 'news', 'note', 'videoPost', 'journalPost']]{..., people[]->{...}} | order(_updatedAt desc)")
    const stickers = await loadData("*[_id == 'stickers']{...}[0]")
    //dereference featured artists
//    const featuredArtists = await loadData("*[_type == 'featuredArtists']{..., featuredArtist1->, featuredArtist2->}")

    const featuredArtists = await loadData("*[_type == 'featuredArtists']{..., featuredArtist1->{..., 'image': mainImage.asset->}, featuredArtist2->{..., 'image': mainImage.asset->}, featuredArtist3->{..., 'image': mainImage.asset->}}")
    return {
        body: {
            programs: programs.status === 404 ? 'ERROR' : programs,
            newPosts: newPosts.status === 404 ? 'ERROR' : addRoute(newPosts),
            stickers: stickers.status === 404 ? 'ERROR' : stickers,
            featuredArtists: featuredArtists.status === 404 ? 'ERROR' : featuredArtists
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
