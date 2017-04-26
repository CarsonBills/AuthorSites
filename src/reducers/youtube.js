function youtube(state = null, action){
    switch (action.type){
        case "FETCH_YOUTUBE":
            return [ action.payload.data ]
    }
    return state;
}

export default youtube;