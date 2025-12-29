/**
 * Theme management utilities
 */

export const THEME_STORAGE_KEY = 'color-theme';
export const THEME_ATTRIBUTE = 'color-theme';

export type Theme = 'light' | 'dark';

/**
 * Gets the current theme from localStorage
 */
export const getStoredTheme = (): Theme | null => {
	if (typeof localStorage === 'undefined') return null;
	const theme = localStorage.getItem(THEME_STORAGE_KEY);
	return theme === 'dark' || theme === 'light' ? theme : null;
};

/**
 * Gets the OS/browser preferred theme
 */
export const getOsTheme = (): Theme => {
	if (typeof window === 'undefined') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Sets the theme (updates localStorage, DOM attribute, and store)
 */
export const setTheme = (theme: Theme, updateStore?: (theme: Theme) => void): void => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	}
	if (typeof document !== 'undefined') {
		document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
	}
	if (updateStore) {
		updateStore(theme);
	}
};

/**
 * Initializes theme on page load (user preference or OS preference)
 */
export const initializeTheme = (updateStore?: (theme: Theme) => void): Theme => {
	const storedTheme = getStoredTheme();
	const theme = storedTheme ?? getOsTheme();
	setTheme(theme, updateStore);
	return theme;
};

/**
 * Toggles between light and dark theme
 */
export const toggleTheme = (currentTheme: Theme, updateStore?: (theme: Theme) => void): Theme => {
	const newTheme = currentTheme === 'light' ? 'dark' : 'light';
	setTheme(newTheme, updateStore);
	return newTheme;
};
