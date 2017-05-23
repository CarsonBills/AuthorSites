function youtube(state = null, action){  
    switch (action.type){
        case "FETCH_YOUTUBE":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default youtube;