import slugify from 'slugify';

// ____
// ____ GLOBAL CONSTANTS
// ___

export const INSTAGRAM_URL = 'https://www.instagram.com/eyebeamnyc/';
export const TWITTER_URL = 'https://twitter.com/eyebeamnyc';
export const YOUTUBE_URL = 'https://www.youtube.com/channel/UCoTYylvEkyd5sv1ZIQJIVeg';
export const BASE_URL = 'https://eyebeam.org';
export const DEFAULT_DESCRIPTION = 'Eyebeam provides both space and support for a community of diverse, justice-driven artists. Our annual fellowship program, highly engaged community of alumni, advanced tools and resources, shows, and events help our artists bring their work to life and out into the world. Eyebeam enables people to think creatively and critically about technology’s effect on society, with the mission of revealing new paths toward a better future for all.';
export const DEFAULT_IMAGE = 'https://eyebeam.netlify.com/img/eyebeam-logo.png';

// ____
// ____ Name maps
// ___

export const postTypeToCategory = {
    program: 'programs',
    person: 'people',
    journalPost: 'journal',
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
    journalPost: 'Journal',
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
    journal: 'Journal',
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

export const dateTimeFormat = date => {
    try {
        if (date) {
            return format(parseISO(date), "MMMM d, yyyy, HH:mm")
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
    let tempToc = []
    if (text && Array.isArray(text)) {
        let headers = text.filter((b) => b.style == 'h2' || b._type == 'columnsBlock' || b._type == 'faq');
        tempToc = headers.map((b) => {
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
    }
    return tempToc;
};

export const renderNewLines = (t) => t.replace(/(?:\r\n|\r|\n)/g, '<br>');

