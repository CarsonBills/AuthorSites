function contact(state = [], action){
    switch (action.type){
        case "FETCH_CONTACT_DATA":
        console.log("FETCH CONTACT DATA", action.payload.data)
            return [ action.payload.data ]
    }
    return state;
}

export default contact;