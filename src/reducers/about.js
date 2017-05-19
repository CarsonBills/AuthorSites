function about(state = [], action){
    switch (action.type){
        case "FETCH_ABOUT_DATA":
        console.log("FETCH ABOUT DATA", action.payload.data)
            return [ action.payload.data ]
    }
    return state;
}

export default about;