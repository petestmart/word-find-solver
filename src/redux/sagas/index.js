import { all } from 'redux-saga/effects';
import wordSaga from './wordSaga';

export default function* rootSaga() {
    yield all([
        wordSaga(),
    ]);
}
