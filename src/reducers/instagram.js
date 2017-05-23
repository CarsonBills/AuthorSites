function instagram(state = null, action){
    switch (action.type){
        case "FETCH_INSTAGRAM":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default instagram;