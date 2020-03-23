import * as types from './types';

export function showModal(payload) {
    return { type: types.SHOW_MODAL, payload };
}

export function hideModal() {
    return {
        type: types.HIDE_MODAL
    };
}
