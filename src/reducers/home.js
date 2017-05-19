function home(state = [], action){
    switch (action.type){
        case "FETCH_HOME_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default home;