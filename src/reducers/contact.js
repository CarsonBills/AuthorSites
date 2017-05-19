function contact(state = [], action){
    switch (action.type){
        case "FETCH_CONTACT_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default contact;