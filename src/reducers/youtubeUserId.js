function youtubeUserId(state = null, action){    
    switch (action.type){
        case "FETCH_YT_USER_ID":
        console.log("yt user id", action.payload.data.items[0].id)
            return [ action.payload.data.items[0].id ]
    }
    return state;
}

export default youtubeUserId;