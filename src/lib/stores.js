import { writable, readable, derived } from 'svelte/store'
import { page } from '$app/stores';
import { categoryToName} from '$lib/global.js';

// WRITABLE
export const currentPage = writable(null)
export const currentCategory = derived(
	page,
	$page => {
        let pathArray = $page.path.split('/').filter(p => p)
        if(pathArray[0] && categoryToName[pathArray[0]]) {
            return {slug: pathArray[0], name: categoryToName[pathArray[0]]}
        } else {
            return null
        }
    }
);