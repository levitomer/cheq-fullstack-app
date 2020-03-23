import { createReducer } from 'utils';
import * as types from './types';

const initialState = {
    toggle: false,
    title: null,
    fields: [],
    type: ''
};

const handlers = {
    [types.SHOW_MODAL]: (state, payload) => {
        const { type, fields, title } = payload;
        return {
            ...state,
            toggle: true,
            type: type,
            title: title,
            fields: fields
        };
    },
    [types.HIDE_MODAL]: state => {
        return { ...state, ...initialState };
    }
};

export default createReducer(initialState, handlers);
