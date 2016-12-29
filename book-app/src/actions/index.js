
// an action creator
export function selectBook(book) {
    // creates an action.  actions MUST contain a type and sometimes contain a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
