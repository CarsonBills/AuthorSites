import axios from "axios";
import store from '../store';

const INSTA_API_KEY =  process.env.REACT_APP_INSTAGRAM_TOKEN
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_TOKEN

const insta_user_id_url = 'https://crossorigin.me/https://api.instagram.com/v1/users/search?q=thegooddeath&access_token=' + INSTA_API_KEY
const insta_url = 'https://crossorigin.me/https://api.instagram.com/v1/users/408476253/media/recent/?access_token=' + INSTA_API_KEY
const youtube_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' 
const youtube_url_2 = '&maxResults=12&order=date&type=video&key=' + YOUTUBE_API_KEY
const youtube_user_id_url = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=' 
const yt_api = '&key=' + YOUTUBE_API_KEY

export function fetchInstagram(index){
    const insta_request = axios.get(insta_url)
    return {
        type: "FETCH_INSTAGRAM",
        payload: insta_request
    }
}

export function fetchYoutube(user_id){
    console.log("Fetch Youtube", user_id)
    const youtube_request = axios.get(youtube_url + user_id + youtube_url_2 )
    return {
        type: "FETCH_YOUTUBE",
        payload: youtube_request
    }
}

export function fetchYoutubeUserID(username){
    console.log("Fetch User ID", youtube_user_id_url + username + yt_api)
    const yt_user_id_request = axios.get(youtube_user_id_url + username + yt_api)
    return {
        type: "FETCH_YT_USER_ID",
        payload: yt_user_id_request
    }
}