/* global API_ROOT */

import parseJSON from './parseJSON';
import setOptions from './setOptions';
import createQuery from './createQuery';

const API_ROOT = 'http://localhost:3000';

export default function fetchRequest(url, options, query) {
    let queryUrl = query ? createQuery(query) : '';

    if (!url.match(/^(https?:\/\/)/i) && url.indexOf('/' + API_ROOT) === -1) {
        url = `${API_ROOT}/${url}`;
    }
    if (!options) {
        options = { method: 'GET' };
    }
    return fetch(`${url}${queryUrl}`, setOptions({ ...options }))
        .then(parseJSON)
        .then(data => data);
}
