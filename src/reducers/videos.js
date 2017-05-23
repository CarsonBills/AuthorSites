function videos(state = [], action){
    switch (action.type){
        case "FETCH_VIDEOS_DATA":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default videos;