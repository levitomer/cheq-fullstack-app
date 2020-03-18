import { fetchRequest } from '../utils';

export function fetchVasts() {
    return fetchRequest('fetch_vasts');
}

export function createVast(vast_url, position, width, height) {
    return fetchRequest('create_vast', {
        method: 'POST',
        body: {
            vast_url,
            position,
            width,
            height
        }
    });
}

export function editVast(body) {
    return fetchRequest('edit_vast', {
        method: 'PATCH',
        body
    });
}
