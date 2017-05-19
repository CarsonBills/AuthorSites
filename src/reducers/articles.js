function articles(state = [], action){
    switch (action.type){
        case "FETCH_ARTICLES_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default articles;