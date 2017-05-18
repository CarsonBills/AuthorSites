import axios from "axios";
import store from '../store';

const INSTA_API_KEY =  process.env.REACT_APP_INSTAGRAM_TOKEN
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_TOKEN

const insta_user_id_url = 'https://crossorigin.me/https://api.instagram.com/v1/users/search?q=';
const insta_user_id_url_2 = '&access_token=' + INSTA_API_KEY
const insta_url = 'https://crossorigin.me/https://api.instagram.com/v1/users/'
const insta_url_2 = '/media/recent/?access_token=' + INSTA_API_KEY



const youtube_url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=' 
const youtube_url_2 = '&maxResults=12&order=date&type=video&key=' + YOUTUBE_API_KEY
const youtube_user_id_url = 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=' 
const youtube_user_id_url_2 = '&key=' + YOUTUBE_API_KEY

export function fetchInstagram(user_id){
    const insta_request = axios.get(insta_url + user_id + insta_url_2)
    console.log("1")
    return {
        type: "FETCH_INSTAGRAM",
        payload: insta_request
    }
}

export function fetchInstagramUserID(username){
    const insta_user_id_request = axios.get(insta_user_id_url + username + insta_user_id_url_2)
    console.log("2")
    return {
        type: "FETCH_INSTA_USER_ID",
        payload: insta_user_id_request
    }
}

export function fetchYoutube(user_id){
    const youtube_request = axios.get(youtube_url + user_id + youtube_url_2 )
    console.log("3")
    return {
        type: "FETCH_YOUTUBE",
        payload: youtube_request
    }
}

export function fetchYoutubeUserID(username){
    const yt_user_id_request = axios.get(youtube_user_id_url + username + youtube_user_id_url_2)
console.log("4")
    return {
        type: "FETCH_YT_USER_ID",
        payload: yt_user_id_request
    }
}
