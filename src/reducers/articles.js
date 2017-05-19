function articles(state = [], action){
    switch (action.type){
        case "FETCH_ARTICLES_DATA":
        console.log("FETCH ARTICLES DATA", action.payload.data)
            return [ action.payload.data ]
    }
    return state;
}

export default articles;