/**
 * Helper function that returns the current date in the basic form (YYYY-MM-DD) as String.
 * @returns String with the Current Date (YYYY-MM-DD).
 */
export const getCurrentDate = () => {
    let today = new Date().toISOString().slice(0, 10);
    return today;
}