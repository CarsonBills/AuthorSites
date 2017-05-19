function books(state = [], action){
    switch (action.type){
        case "FETCH_BOOKS_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default books;