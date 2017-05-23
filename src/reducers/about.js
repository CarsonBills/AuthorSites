function about(state = [], action){
    switch (action.type){
        case "FETCH_ABOUT_DATA":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default about;