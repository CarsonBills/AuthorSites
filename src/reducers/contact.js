function contact(state = [], action){
    switch (action.type){
        case "FETCH_CONTACT_DATA":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default contact;