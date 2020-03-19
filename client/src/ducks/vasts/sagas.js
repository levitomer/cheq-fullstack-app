import * as types from './types';
import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../../routes/vasts';

function* fetchVasts() {
    try {
        const response = yield call(api.fetchVasts);
        yield put({ type: types.FETCH_VAST_SUCCESS, payload: response.data });
    } catch (err) {
        yield put({ type: types.FETCH_VAST_FAILURE, err });
    }
}

function* createVast() {
    try {
        yield put({ type: types.CREATE_VAST_SUCCESS });
    } catch (err) {
        yield put({ type: types.CREATE_VAST_FAILURE, err });
    }
}

function* editVast() {
    try {
        yield put({ type: types.EDIT_VAST_SUCCESS });
    } catch (err) {
        yield put({ type: types.EDIT_VAST_FAILURE });
    }
}

function* vastsSaga() {
    yield takeLatest(types.FETCH_VAST_REQUEST, fetchVasts);
    yield takeLatest(types.CREATE_VAST_REQUEST, createVast);
    yield takeLatest(types.EDIT_VAST_REQUEST, editVast);
}

export default vastsSaga;
