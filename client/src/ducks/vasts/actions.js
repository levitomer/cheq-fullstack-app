import * as types from './types';

export function fetchVasts() {
    return { type: types.FETCH_VAST_REQUEST };
}

export function createVast(vast_url, position, width, height) {
    return {
        type: types.FETCH_VAST_REQUEST,
        payload: {
            vast_url,
            position,
            width,
            height
        }
    };
}

export function editVast(vast) {
    return { type: types.EDIT_VAST_REQUEST, payload: vast };
}

export function fetchVastById(id) {
    return { type: types.FETCH_VAST_BY_ID_REQUEST, id };
}
