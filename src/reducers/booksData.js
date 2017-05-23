function booksData(state = [], action){
    switch (action.type){
        case "FETCH_BOOK_DETAIL_DATA":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default booksData;