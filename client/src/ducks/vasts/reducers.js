import { createReducer } from 'utils';
import * as types from './types';

const initialState = {
    loading: false,
    error: null,
    data: [],
    xml: null
};

const handlers = {
    // FETCH VASTS HANDLERS
    [types.FETCH_VAST_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.FETCH_VAST_SUCCESS]: (state, payload) => {
        return { ...state, data: payload, loading: false, error: null };
    },
    [types.FETCH_VAST_FAILURE]: (state, payload) => {
        return { ...state, error: payload, loading: false };
    },

    // CREATE VAST HANDLERS
    [types.CREATE_VAST_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.CREATE_VAST_SUCCESS]: (state, payload) => {
        console.log('CREATE_VAST_SUCCESS', payload);
        return {
            ...state,
            data: [...state.data, payload],
            loading: false,
            error: null
        };
    },
    [types.CREATE_VAST_FAILURE]: (state, payload) => {
        return { ...state, error: payload, loading: false };
    },

    // EDIT VAST HANDLERS
    [types.EDIT_VAST_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.EDIT_VAST_SUCCESS]: (state, payload) => {
        const vasts = state.data.map(vast => {
            if (vast.id === payload.id) return payload;
            return vast;
        });
        return {
            ...state,
            data: vasts,
            loading: false,
            error: null
        };
    },
    [types.EDIT_VAST_FAILURE]: (state, payload) => {
        return { ...state, error: payload, loading: false };
    },

    // VIEW VAST HANDLERS
    [types.FETCH_VAST_BY_ID_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.FETCH_VAST_BY_ID_SUCCESS]: (state, payload) => {
        return { ...state, xml: payload, loading: false, error: null };
    },
    [types.FETCH_VAST_BY_ID_FAILURE]: (state, payload) => {
        return { ...state, xml: null, loading: false, error: payload };
    }
};

export default createReducer(initialState, handlers);
