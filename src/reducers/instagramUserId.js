function instagramUserId(state = null, action){
    
    switch (action.type){
        case "FETCH_INSTA_USER_ID":
                console.log("insta user id", action.payload)
            return [ action.payload.data.data[0].id ]
    }
    return state;
}

export default instagramUserId;