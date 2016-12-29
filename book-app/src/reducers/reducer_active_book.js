
// state argument is NOT the whole application state
// it is only the piece of state that is used/produced by this reducer
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    // return previous state
    return state;
}
