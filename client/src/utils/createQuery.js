/**
 * Creates a query string
 * @param {Object} params - query params splitted to <key, value> pairs
 * @return {string} - query string for url
 * */
export default function createQuery(params = {}) {
    if (!params) return '';
    return Object.keys(params).reduce((query, key, index) => {
        return params[key] === undefined || params[key] === null
            ? query
            : `${query}${query && index ? '&' : '?'}${key}=${params[key]}`;
    });
}
