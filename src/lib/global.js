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
    video: 'videos'
}

export const postTypeToName = {
    program: 'Program',
    person: 'Person',
    blogPost: 'Blog',
    event: 'Event',
    aboutPage: 'About',
    project: 'Project',
    note: 'Note',
    video: 'Video'
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
    everything: 'Everything'
}

// ____
// ____ Name maps
// ___
import { format, parseISO } from "date-fns"

export const dotFormatDate = date => {
      try {
        if(date) {
            return format(parseISO(date), "dd.MM.yyyy")
        }
    } catch (err) {
        console.dir(err)
    }
}

export const longFormatDate = date => {
      try {
        if(date) {
            return format(parseISO(date), "d MMMM, yyyy")
        }
    } catch (err) {
        console.dir(err)
    }
}

