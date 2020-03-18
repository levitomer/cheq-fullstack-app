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

export function editVast(payload) {
    return { type: types.FETCH_VAST_REQUEST, payload };
}
