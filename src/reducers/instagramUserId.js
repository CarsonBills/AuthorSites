function instagramUserId(state = null, action){
    
    switch (action.type){
        case "FETCH_INSTA_USER_ID":
            return [ action.payload.data.data[0].id ]
    }
    return state;
}

export default instagramUserId;