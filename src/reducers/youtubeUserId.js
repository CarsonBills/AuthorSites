function youtubeUserId(state = null, action){
    console.log("UserID", action )
    
    switch (action.type){
        case "FETCH_YT_USER_ID":
            return [ action.payload.data.items[0].id ]
    }
    return state;
}

export default youtubeUserId;