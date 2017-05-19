function videos(state = [], action){
    switch (action.type){
        case "FETCH_VIDEOS_DATA":
        console.log("FETCH EVENTS DATA", action.payload.data)
            return [ action.payload.data ]
    }
    return state;
}

export default videos;