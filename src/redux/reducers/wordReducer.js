// ========== WORD REDUCER ========== //
// Store words found in word find

const wordReducer = (state = [], action) => {
    if (action.type === 'STORE_WORDS'){
        return action.payload
    }
    else {
        return state;
    }
}

export default wordReducer;