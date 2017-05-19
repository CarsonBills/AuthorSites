function about(state = [], action){
    switch (action.type){
        case "FETCH_ABOUT_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default about;