function siteConfig(state = [], action){
    switch (action.type){
        case "FETCH_SITE_CONFIG_DATA":
            return [ action.payload.data ];
        default:
            break;
    }
    return state;
}

export default siteConfig;