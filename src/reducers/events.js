function events(state = [], action){
    switch (action.type){
        case "FETCH_EVENTS_DATA":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default events;