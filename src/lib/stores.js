import { writable, readable, derived } from 'svelte/store'
import { page } from '$app/stores';
import { categoryToName } from '$lib/global.js';

// WRITABLE
export const trayOpen = writable(false)
export const theme = writable('ink')
export const inversion = writable(false)
export const activeCity = writable({})
export const sidebarTitle = writable('')
export const sidebarToC = writable([])
export const currentPage = writable(null)
export const currentCategory = derived(
    page,
    $page => {
        let pathArray = $page.url.pathname.split('/').filter(p => p)
        if (pathArray[0] && categoryToName[pathArray[0]]) {
            return { slug: pathArray[0], name: categoryToName[pathArray[0]] }
        } else {
            return null
        }
    }
);