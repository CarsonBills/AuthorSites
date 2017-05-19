function booksData(state = [], action){
    switch (action.type){
        case "FETCH_BOOK_DETAIL_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default booksData;