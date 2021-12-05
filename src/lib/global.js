// ____
// ____ Name maps
// ___

export const postTypeToCategory = {
    program: 'programs',
    person: 'people',
    blogPost: 'blog',
    event: 'events',
    aboutPage: 'about',
    project: 'projects',
    note: 'notes',
    video: 'videos',
    press: 'press-and-news',
    news: 'press-and-news'
}

export const postTypeToName = {
    program: 'Program',
    person: 'Person',
    blogPost: 'Blog',
    event: 'Event',
    aboutPage: 'About',
    project: 'Project',
    note: 'Note',
    video: 'Video',
    press: 'Press',
    news: 'News'
}

export const categoryToName = {
    programs: 'Programs',
    people: 'People',
    blog: 'Blog',
    events: 'Events',
    about: 'About',
    projects: 'Projects',
    notes: 'Notes',
    videos: 'Videos',
    statements: 'Statements',
    everything: 'Everything',
    press: 'Press',
    news: 'News'
}

// ____
// ____ Name maps
// ___
import { format, parseISO, formatDistanceToNow, isFuture } from "date-fns"

export const dotFormatDate = date => {
    try {
        if (date) {
            return format(parseISO(date), "dd.MM.yyyy")
        }
    } catch (err) {
        console.dir(err)
    }
}

export const longFormatDate = date => {
    try {
        if (date) {
            return format(parseISO(date), "MMMM d, yyyy")
        }
    } catch (err) {
        console.dir(err)
    }
}

export const shortFormatDate = date => {
    try {
        if (date) {
            return format(parseISO(date), "MMMM yyyy")
        }
    } catch (err) {
        console.dir(err)
    }
}

export const distanceToDate = date => {
    try {
        if (date) {
            const parsedDate = parseISO(date)
            if (isFuture(parsedDate)) {
                return 'On ' + format(parsedDate, "MMMM d")
            }
            return formatDistanceToNow(parsedDate) + ' ago'
        }
        return ''
    } catch (err) {
        console.dir(err)
    }
}



