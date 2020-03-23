import * as types from './types';

export function fetchVasts() {
    return { type: types.FETCH_VAST_REQUEST };
}

export function createVast(newVast) {
    return {
        type: types.CREATE_VAST_REQUEST,
        payload: newVast
    };
}

export function editVast(vast) {
    return { type: types.EDIT_VAST_REQUEST, payload: vast };
}

export function fetchVastById(id) {
    return { type: types.FETCH_VAST_BY_ID_REQUEST, id };
}
