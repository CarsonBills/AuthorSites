import axios from "axios";
//import store from '../store';

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
    return {
        type: "FETCH_INSTAGRAM",
        payload: insta_request
    }
}

export function fetchInstagramUserID(username){
    const insta_user_id_request = axios.get(insta_user_id_url + username + insta_user_id_url_2)
    return {
        type: "FETCH_INSTA_USER_ID",
        payload: insta_user_id_request
    }
}

export function fetchYoutube(user_id){
    const youtube_request = axios.get(youtube_url + user_id + youtube_url_2 )
    return {
        type: "FETCH_YOUTUBE",
        payload: youtube_request
    }
}

export function fetchYoutubeUserID(username){
    const yt_user_id_request = axios.get(youtube_user_id_url + username + youtube_user_id_url_2)
    return {
        type: "FETCH_YT_USER_ID",
        payload: yt_user_id_request
    }
}

export function fetchContactData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/contact/contacts')
    return {
        type: "FETCH_CONTACT_DATA",
        payload: contact_request
    }
}

export function fetchAboutData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/about/about')
    return {
        type: "FETCH_ABOUT_DATA",
        payload: contact_request
    }
}

export function fetchArticlesData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/articles/articles')
    return {
        type: "FETCH_ARTICLES_DATA",
        payload: contact_request
    }
}

export function fetchEventsData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/events/events')
    return {
        type: "FETCH_EVENTS_DATA",
        payload: contact_request
    }
}

export function fetchVideosData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/videos/videos')
    return {
        type: "FETCH_VIDEOS_DATA",
        payload: contact_request
    }
}

export function fetchHomeData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/home/Home')
    return {
        type: "FETCH_HOME_DATA",
        payload: contact_request
    }
}

export function fetchSiteConfigData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/siteConfig')
    return {
        type: "FETCH_SITE_CONFIG_DATA",
        payload: contact_request
    }
}

export function fetchBooksPageData(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/bookspage/books')
    return {
        type: "FETCH_BOOKS_DATA",
        payload: contact_request
    }
}

export function fetchBookDetails(author){
    const contact_request = axios.get('https://stg-services.wwnorton.com/getCmsContent.php?url=/api/author/' + author + '/books')
    return {
        type: "FETCH_BOOK_DETAIL_DATA",
        payload: contact_request
    }
}

export function newsletterSubscribe(user, listId){
    const config = {
       headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
       }
    };
    const contact_request = axios.post('https://services.wwnorton.com/campmon/adduser', {'email': user, lists: [{'listId' : listId, "optIn": "true"}]}, config)
    return {
        type: "SUBSCRIBE",
        payload: contact_request
    }
}