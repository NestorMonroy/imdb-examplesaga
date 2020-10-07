import { put, call, takeLatest } from 'redux-saga/effects';

import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionsTypes'

import { apiCall } from '../api';

export function* searchMovie({ payload }) {
  try {
    const results = yield call(apiCall, `&s=${payload.movieName}`, null, null, 'GET');
    yield put({ type: SEARCH_MOVIE_COMPLETE, results });
  } catch (e) {
    yield put({ type: SEARCH_MOVIE_ERROR, e });
  }
}

export default function* search() {
  yield takeLatest(SEARCH_MOVIE_START, searchMovie);
}