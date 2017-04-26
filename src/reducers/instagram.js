function instagram(state = null, action){
    switch (action.type){
        case "FETCH_INSTAGRAM":
            return [ action.payload.data ]
    }
    return state;
}

export default instagram;