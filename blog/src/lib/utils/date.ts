/**
 * Date formatting utilities
 */

/**
 * Formats a date string to YYYY-MM-DD format
 * @param date - Date string or Date object
 * @returns Formatted date string (YYYY-MM-DD)
 */
export const formatDate = (date: string | Date): string => {
	if (typeof date === 'string') {
		return date.slice(0, 10);
	}
	return date.toISOString().slice(0, 10);
};

/**
 * Gets today's date in YYYY-MM-DD format
 */
export const getToday = (): string => {
	return new Date().toISOString().slice(0, 10);
};
