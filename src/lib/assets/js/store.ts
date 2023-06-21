import { writable } from 'svelte/store';

export const currentPage = writable('');
export const isMenuOpen = writable(false);
export const colorTheme = writable('dark');
