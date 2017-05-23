function youtubeUserId(state = null, action){    
    switch (action.type){
        case "FETCH_YT_USER_ID":
            return [ action.payload.data.items[0].id ];
        default:
            break;
    }
    return state;
}

export default youtubeUserId;