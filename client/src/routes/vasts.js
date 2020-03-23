import { fetchRequest } from 'utils';

export function fetchVasts() {
    return fetchRequest('fetch_vasts');
}

export function createVast(payload) {
    return fetchRequest('create_vast', {
        method: 'POST',
        body: payload
    });
}

export function editVast(payload) {
    return fetchRequest('edit_vast', {
        method: 'PATCH',
        body: payload
    });
}

export function fetchVastById(id) {
    return fetchRequest(`vast?id=${id}`);
}
