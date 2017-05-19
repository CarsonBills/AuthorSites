function videos(state = [], action){
    switch (action.type){
        case "FETCH_VIDEOS_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default videos;