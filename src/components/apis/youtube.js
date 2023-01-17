import axios from 'axios';
const KEY = 'AIzaSyBVv4KiD1JGsbXxFtK5TIWoVG5AP_N7w-o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})