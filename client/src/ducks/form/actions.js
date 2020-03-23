import * as types from './types';

export function invalidForm() {
    return { type: types.INVALID_FORM };
}

export function resetError() {
    return {
        type: types.RESET_FORM
    };
}
