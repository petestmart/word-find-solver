import { combineReducers } from 'redux';
import foundWords from './wordReducer';

const rootReducer = combineReducers({
    foundWords // stores words found in the word find
})

export default rootReducer;