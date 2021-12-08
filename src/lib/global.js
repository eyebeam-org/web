import slugify from 'slugify';

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
    videoPost: 'videos',
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
    videoPost: 'Video',
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

export const roleToRoleName = {
    artist: 'Artist',
    staff: 'Staff',
    board: 'Board',
    advisoryCommittee: 'Advisory Committee'
}

// ____
// ____ Date
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

export const getCurrentYear = () => {
    return Number(format(new Date(), "yyyy"))
}

// ____
// ____ ***
// ___


export const parseToc = (text) => {
    console.log(text);
    let headers = text.filter((b) => b.style == 'h2' || b._type == 'columnsBlock' || b._type == 'faq');
    console.log(headers);

    let tempToc = headers.map((b) => {
        if (b._type == 'columnsBlock' || b._type == 'faq') {
            return {
                title: b.title,
                link:
                    '#' +
                    slugify(b.title, {
                        lower: true
                    })
            };
        } else {
            return {
                title: b.children[0].text,
                link:
                    '#' +
                    slugify(b.children[0].text, {
                        lower: true
                    })
            };
        }
    });

    return tempToc;
};

