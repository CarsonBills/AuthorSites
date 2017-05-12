import axios from "axios";
import store from '../store';

const INSTA_API_KEY =  process.env.REACT_APP_INSTAGRAM_TOKEN
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_TOKEN
const state = store.getState()
const insta_url = 'https://crossorigin.me/https://api.instagram.com/v1/users/408476253/media/recent/?access_token=' + INSTA_API_KEY
const youtube_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCi5iiEyLwSLvlqnMi02u5gQ&maxResults=12&order=date&type=video&key=' + YOUTUBE_API_KEY

export function fetchInstagram(index){
    const insta_request = axios.get(insta_url)
    return {
        type: "FETCH_INSTAGRAM",
        payload: insta_request
    }
}

export function fetchYoutube(index){
    const youtube_request = axios.get(youtube_url)
    return {
        type: "FETCH_YOUTUBE",
        payload: youtube_request
    }
}
