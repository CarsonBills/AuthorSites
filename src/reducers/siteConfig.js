function siteConfig(state = [], action){
    switch (action.type){
        case "FETCH_SITE_CONFIG_DATA":
            return [ action.payload.data ]
    }
    return state;
}

export default siteConfig;